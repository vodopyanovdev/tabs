import { useEffect, useState } from 'react';
import { IData } from './interfaces/interfaces';
import Container from '@mui/material/Container';

import { TabsComponent } from './Components/Tabs/TabsComponent';

function App() {
  const [data, setData] = useState<IData>();

  useEffect((): void => {
    fetch('https://content.guardianapis.com/search?api-key=test').then(
      async (res) => {
        setData(await res.json());
      },
    );
  }, []);

  if (!data) {
    return <div></div>;
  }

  return (
    <Container>
      <TabsComponent response={data.response} />
    </Container>
  );
}

export default App;
