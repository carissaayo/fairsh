import { useLoginStore } from "../../context/auth/loginStore";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import UserRow from "./UserRow";

const UsersTable = () => {
  const isAdmin = useLoginStore((state) => state.user).profile.adminId;

  const users = [
    {
      id: "1",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "1",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "01",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "02",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "03",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "04",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "05",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "06",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "06",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "07",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "08",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "09",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
    {
      id: "10",
      name: "Seyi Omo",
      phoneNumber: "09102030405",
      email: "seyiomo@gmail.com",
      creationDate: "Jan 8, 2024",
    },
  ];

  return (
    <ScrollArea className=" rounded-md border p-4">
      <Table className="border border-opacity-30  rounded-lg min-w-[800px] overflow-x-scroll">
        <TableHeader className="rounded-lg ">
          <TableRow className="">
            <TableHead className="font-bold text-lg text-black text-opacity-100 text-center dark:text-white">
              ID
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Name
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              <div className="pl-4">Email</div>
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Phone Number
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Creation Date
            </TableHead>

            {isAdmin && (
              <TableHead
                className="font-bold text-lg text-black text-opacity-100 text-center dark:text-white"
                //   className="text-right"
              >
                Actions
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user) => <UserRow {...user} isAdmin key={user.id} />)}
          {/* A user row */}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default UsersTable;
