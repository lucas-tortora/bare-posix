/** Returns the real group ID of the calling process. */
export function getgid(): number

/**
 * Set the real group ID of the calling process. Accepts a numeric ID or a group name, resolved via
 * `getgrnam`.
 * @param id - The group to switch to: a numeric group ID, or a group name resolved via `getgrnam`.
 * @throws On platforms without POSIX support (android, win32), throws `Error: Platform not
 * supported`.
 */
export function setgid(id: number | string): void

/** Returns the effective group ID of the calling process. */
export function getegid(): number

/**
 * Set the effective group ID of the calling process. Accepts a numeric ID or a group name, resolved
 * via `getgrnam`.
 * @param id - The group to switch to: a numeric group ID, or a group name resolved via `getgrnam`.
 * @throws On platforms without POSIX support (android, win32), throws `Error: Platform not
 * supported`.
 */
export function setegid(id: number | string): void

/** Returns the real user ID of the calling process. */
export function getuid(): number

/**
 * Set the real user ID of the calling process. Accepts a numeric ID or a username, resolved via
 * `getpwnam`.
 * @param id - The user to switch to: a numeric user ID, or a username resolved via `getpwnam`.
 * @throws On platforms without POSIX support (android, win32), throws `Error: Platform not
 * supported`.
 */
export function setuid(id: number | string): void

/** Returns the effective user ID of the calling process. */
export function geteuid(): number

/**
 * Set the effective user ID of the calling process. Accepts a numeric ID or a username, resolved
 * via `getpwnam`.
 * @param id - The user to switch to: a numeric user ID, or a username resolved via `getpwnam`.
 * @throws On platforms without POSIX support (android, win32), throws `Error: Platform not
 * supported`.
 */
export function seteuid(id: number | string): void

/** Returns the supplementary group IDs of the calling process. */
export function getgroups(): number[]

/** A POSIX group record, as returned by `getgrnam`. */
export interface Group {
  /** The group's name. */
  groupname: string
  /** The group's encrypted password field. */
  passwd: string
  /** The group's numeric ID. */
  gid: number
  /** Usernames of the group's members. */
  members: string[]
}

/**
 * Look up a group by name, returning its `Group` record or `null` if it doesn't exist.
 * @param name - The group name to look up.
 * @returns The matching `Group` record, or `null` if no such group exists.
 */
export function getgrnam(name: string): Group | null

/** A POSIX user record, as returned by `getpwnam`. */
export interface Passwd {
  /** The user's login name. */
  username: string
  /** The user's encrypted password field. */
  passwd: string
  /** The user's numeric ID. */
  uid: number
  /** The user's primary group ID. */
  gid: number
  /** The user's full name or comment field. */
  gecos: string
  /** The user's home directory. */
  homedir: string
  /** The user's login shell. */
  shell: string
}

/**
 * Look up a user by name, returning its `Passwd` record or `null` if it doesn't exist.
 * @param name - The user name to look up.
 * @returns The matching `Passwd` record, or `null` if no such user exists.
 */
export function getpwnam(name: string): Passwd | null
