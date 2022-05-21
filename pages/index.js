import { Button } from "semantic-ui-react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";

export default function Home() {
  return (
    <div className='home'>
      <h1>Hola desde Next</h1>
      <BasicLayout>
        <h1>Children</h1>
      </BasicLayout>

    </div>

  )
}
