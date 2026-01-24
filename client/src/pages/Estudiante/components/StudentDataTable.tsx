import { FC } from "react";

interface StudentDataTableProps {
  fields: { title: string; data: string | number | undefined }[];
}

const StudentDataTable: FC<StudentDataTableProps> = ({ fields }) => {
  return (
    <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {
        fields.map(({ title, data }) => (
          <div key={title} className="odd:text-brand-primary even:text-orange-400 odd:bg-purple-50 even:bg-orange-50 p-4 rounded-xl">
            <dt className="font-medium">{title}</dt>
            <dd className="text-black-2 font-semibold">{data}</dd>
          </div>
        ))
      }
    </dl>
  );
}

export default StudentDataTable;
