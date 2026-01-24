import DemoStudentProvider from "./contexts/DemoStudentProvider.tsx"
import Student from "./Student.tsx"

const DemoStudent = () => {
  return (
    <DemoStudentProvider>
      <Student />
    </DemoStudentProvider>
  )
}
export default DemoStudent
