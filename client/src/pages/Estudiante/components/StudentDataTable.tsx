import { FC } from "react";

interface StudentDataTableProps {
  data: { title: string; data: string | number | undefined }[];
}

const StudentDataTable: FC<StudentDataTableProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {
        data.map(({ title, data }, index) => (
          <div key={index} className="odd:text-brand-primary even:text-orange-400 odd:bg-purple-50 even:bg-orange-50 p-4 rounded-xl">
            <p className="font-medium">{title}</p>
            <p className="text-black-2 font-semibold">{data}</p>
          </div>
        ))
      }
    </div>
  );
}

export default StudentDataTable;
