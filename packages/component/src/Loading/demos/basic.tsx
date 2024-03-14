import React, { useState } from 'react';
import { Button, Loading } from 'aelf-design';

export default function LoadingExample() {
  const [openLoading, setOpenLoading] = useState(false);

  const onClickHandler = () => {
    setOpenLoading(true);
    setTimeout(() => {
      setOpenLoading(false);
    }, 3000);
  };

  return (
    <>
      <Button onClick={onClickHandler}>open loading</Button>
      <Loading open={openLoading} content={<div>I am loading......</div>} />
    </>
  );
}
