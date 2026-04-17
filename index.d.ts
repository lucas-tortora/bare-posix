export function getgid(): number

export function getegid(): number

export function getuid(): number

export function geteuid(): number

export function getgroups(): number[]

export interface Group {
  groupname: string
  passwd: string
  gid: number
  members: string[]
}

export function getgrnam(name: string): Group
