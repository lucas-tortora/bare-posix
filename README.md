# bare-posix

POSIX-specific bindings for Bare.

```
npm i bare-posix
```

<!-- bare-refgen:api start -->

## API

### Functions

#### `getgid(): number`

Returns the real group ID of the calling process.

#### `setgid(id: number | string): void`

Set the real group ID of the calling process. Accepts a numeric ID or a group name, resolved via `getgrnam`.

**Parameters**

| Parameter | Type               | Default | Description                                                                          |
| --------- | ------------------ | ------- | ------------------------------------------------------------------------------------ |
| `id`      | `number \| string` | —       | The group to switch to: a numeric group ID, or a group name resolved via `getgrnam`. |

**Throws**

- On platforms without POSIX support (android, win32), throws `Error: Platform not supported`.

#### `getegid(): number`

Returns the effective group ID of the calling process.

#### `setegid(id: number | string): void`

Set the effective group ID of the calling process. Accepts a numeric ID or a group name, resolved via `getgrnam`.

**Parameters**

| Parameter | Type               | Default | Description                                                                          |
| --------- | ------------------ | ------- | ------------------------------------------------------------------------------------ |
| `id`      | `number \| string` | —       | The group to switch to: a numeric group ID, or a group name resolved via `getgrnam`. |

**Throws**

- On platforms without POSIX support (android, win32), throws `Error: Platform not supported`.

#### `getuid(): number`

Returns the real user ID of the calling process.

#### `setuid(id: number | string): void`

Set the real user ID of the calling process. Accepts a numeric ID or a username, resolved via `getpwnam`.

**Parameters**

| Parameter | Type               | Default | Description                                                                      |
| --------- | ------------------ | ------- | -------------------------------------------------------------------------------- |
| `id`      | `number \| string` | —       | The user to switch to: a numeric user ID, or a username resolved via `getpwnam`. |

**Throws**

- On platforms without POSIX support (android, win32), throws `Error: Platform not supported`.

#### `geteuid(): number`

Returns the effective user ID of the calling process.

#### `seteuid(id: number | string): void`

Set the effective user ID of the calling process. Accepts a numeric ID or a username, resolved via `getpwnam`.

**Parameters**

| Parameter | Type               | Default | Description                                                                      |
| --------- | ------------------ | ------- | -------------------------------------------------------------------------------- |
| `id`      | `number \| string` | —       | The user to switch to: a numeric user ID, or a username resolved via `getpwnam`. |

**Throws**

- On platforms without POSIX support (android, win32), throws `Error: Platform not supported`.

#### `getgroups(): number[]`

Returns the supplementary group IDs of the calling process.

#### `getgrnam(name: string): Group | null`

Look up a group by name, returning its `Group` record or `null` if it doesn't exist.

**Parameters**

| Parameter | Type     | Default | Description                |
| --------- | -------- | ------- | -------------------------- |
| `name`    | `string` | —       | The group name to look up. |

**Returns** `Group | null` — The matching `Group` record, or `null` if no such group exists.

#### `getpwnam(name: string): Passwd | null`

Look up a user by name, returning its `Passwd` record or `null` if it doesn't exist.

**Parameters**

| Parameter | Type     | Default | Description               |
| --------- | -------- | ------- | ------------------------- |
| `name`    | `string` | —       | The user name to look up. |

**Returns** `Passwd | null` — The matching `Passwd` record, or `null` if no such user exists.

### Types

#### `Group`

```ts
interface Group {
  groupname: string
  passwd: string
  gid: number
  members: string[]
}
```

A POSIX group record, as returned by `getgrnam`.

#### `Passwd`

```ts
interface Passwd {
  username: string
  passwd: string
  uid: number
  gid: number
  gecos: string
  homedir: string
  shell: string
}
```

A POSIX user record, as returned by `getpwnam`.
<!-- bare-refgen:api end -->

## License

Apache-2.0
