import React from 'react';
import { Button, DatePickerForMobile, Typography } from 'aelf-design';

export default function DatePickerForMobileExample() {
  const [visible, setVisible] = React.useState(false);
  const [dateMsg, setDateMsg] = React.useState('');
  return (
    <div>
      <Button onClick={() => setVisible(true)}>open datepicker</Button>
      {dateMsg && (
        <p>
          <Typography.Text>now is: {dateMsg}</Typography.Text>
        </p>
      )}

      <DatePickerForMobile
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        precision="minute"
        onConfirm={(val) => {
          setDateMsg(val.toString());
        }}
      />
    </div>
  );
}
