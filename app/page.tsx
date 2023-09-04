'use client'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '@/graphql/queries'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from '@prisma/client'


export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading)
    return (
      <p className="text-white flex items-center justify-center">
        Loading ....
      </p>
    );

  if (error)
    return (
      <p className="text-white flex items-center justify-center">
        Oops! Something went wrong ....
      </p>
    );

  const users: User[] = data?.users;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              users.map((user) => (
                <>
                  <TableRow>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className="text-right">Active</TableCell>
                  </TableRow>
                </>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
