const test = require('brittle')
const posix = require('.')

const isWindows = Bare.platform === 'win32'

test('getgid', (t) => {
  t.comment(posix.getgid())
})

test('setgid', { skip: isWindows }, (t) => {
  t.execution(() => posix.setgid(posix.getgid()))
})

test('getegid', (t) => {
  t.comment(posix.getegid())
})

test('setegid', { skip: isWindows }, (t) => {
  t.execution(() => posix.setegid(posix.getegid()))
})

test('getuid', (t) => {
  t.comment(posix.getuid())
})

test('setuid', { skip: isWindows }, (t) => {
  t.execution(() => posix.setuid(posix.getuid()))
})

test('geteuid', (t) => {
  t.comment(posix.geteuid())
})

test('seteuid', { skip: isWindows }, (t) => {
  t.execution(() => posix.seteuid(posix.geteuid()))
})

test('getgroups', (t) => {
  t.comment(posix.getgroups())
})

test('getgrnam', (t) => {
  t.is(posix.getgrnam('group_not_found'), null)
})

test('getpwnam', (t) => {
  t.is(posix.getpwnam('user_not_found'), null)
})
