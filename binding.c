#include <bare.h>
#include <js.h>
#include <unistd.h>

static js_value_t *
bare_posix_getgid(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_uint32(env, getgid(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_posix_getegid(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_uint32(env, getegid(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_posix_getuid(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_uint32(env, getuid(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_posix_geteuid(js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_uint32(env, geteuid(), &result);
  assert(err == 0);

  return result;
}

static js_value_t *
bare_posix_getgroups(js_env_t *env, js_callback_info_t *info) {
  int err;

  int len = getgroups(0, NULL);
  if (len == -1) {
    err = uv_translate_sys_error(errno);

    err = js_throw_error(env, uv_err_name(err), uv_strerror(err));
    assert(err == 0);

    return NULL;
  }

  gid_t gids[len];
  len = getgroups(len, gids);
  if (len == -1) {
    err = uv_translate_sys_error(errno);

    err = js_throw_error(env, uv_err_name(err), uv_strerror(err));
    assert(err == 0);

    return NULL;
  }

  js_value_t *result;
  err = js_create_array_with_length(env, len, &result);
  assert(err == 0);

  for (size_t i = 0; i < len; i++) {
    js_value_t *gid;
    err = js_create_uint32(env, gids[i], &gid);
    assert(err == 0);

    err = js_set_element(env, result, i, gid);
    assert(err == 0);
  }

  return result;
}

static js_value_t *
bare_posix_exports(js_env_t *env, js_value_t *exports) {
  int err;

#define V(name, fn) \
  { \
    js_value_t *val; \
    err = js_create_function(env, name, -1, fn, NULL, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, name, val); \
    assert(err == 0); \
  }

  V("getgid", bare_posix_getgid)
  V("getegid", bare_posix_getegid)
  V("getuid", bare_posix_getuid)
  V("geteuid", bare_posix_geteuid)
  V("getgroups", bare_posix_getgroups)
#undef V

  return exports;
}

BARE_MODULE(bare_posix, bare_posix_exports)
