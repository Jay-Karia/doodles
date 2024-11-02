import { Button, Text } from "./components"

export default function App() {
  return (
  <div className="">
    <div className="flex gap-2">
      <Text underline={true} as="h1">Welcome to </Text>
      <Button variant={"outline"} className="m-2">Doodles</Button>
    </div>
  </div>
  ) 
}