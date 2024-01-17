import Address from 'components/Address'

export default function AddressExample() {
  return (
    <>
      <Address
        className="w-[300px]"
        address="iCQmBkK5m4FC6DMjkMGAsx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        size="small"
        addressClickCallback={(o, f) => {
          console.log(o, f)
        }}
      />
      <Address
        className="w-[300px]"
        address="iCQmBkK5m4FC6DsMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
      />
      <Address
        className="w-[300px]"
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        size="large"
      />
      <Address
        className="w-[300px]"
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        size="ultra"
      />

      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        size="small"
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        size="large"
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        size="ultra"
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        preLen={8}
        endLen={11}
        size="small"
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        preLen={8}
        endLen={11}
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        preLen={8}
        endLen={11}
        size="large"
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        preLen={8}
        endLen={11}
        size="ultra"
      />
    </>
  )
}
