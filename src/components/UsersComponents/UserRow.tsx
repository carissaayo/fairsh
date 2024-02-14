import { TableCell, TableRow } from "../ui/table";
import DropdownMenuCon from "./DropDownMenu";

const UserRow = ({
  id,
  name,
  email,
  phoneNumber,
  creationDate,
  isAdmin,
}: {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  creationDate: string;
  isAdmin: boolean;
}) => {
  return (
    <TableRow className="text-base">
      <TableCell className="font-medium text-center">
        <div className="text-center">{id}</div>
      </TableCell>
      <TableCell>
        <div className="text-center">{name}</div>
      </TableCell>
      <TableCell>
        <div className="text-center">{email}</div>
      </TableCell>
      <TableCell className="">
        <div className="text-center">{phoneNumber}</div>
      </TableCell>
      <TableCell className="">
        <div className="text-center">{creationDate}</div>
      </TableCell>
      {isAdmin && (
        <TableCell className="">
          <DropdownMenuCon />
        </TableCell>
      )}
    </TableRow>
  );
};

export default UserRow;
