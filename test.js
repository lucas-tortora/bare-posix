const test = require('brittle')
const posix = require('.')

test('getgid', (t) => {
  t.comment(posix.getgid())
})

test('getegid', (t) => {
  t.comment(posix.getegid())
})

test('getuid', (t) => {
  t.comment(posix.getuid())
})

test('geteuid', (t) => {
  t.comment(posix.geteuid())
})

test('getgroups', (t) => {
  t.comment(posix.getgroups())
})

test('getgrnam', (t) => {
  t.is(posix.getgrnam('group_not_found'), null)
})
