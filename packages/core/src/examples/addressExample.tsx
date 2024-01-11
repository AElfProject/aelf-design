import Address from 'components/Address'

export default function AddressExample() {
  return (
    <>
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        addressClickCallback={(o, f) => {
          console.log(o, f)
        }}
      />

      <Address
        address="iCQmBjkkkK5m4FdC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
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
        hasCopy={false}
      />
      <Address
        address="iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr"
        chain="tDVV"
        preLen={0}
        endLen={11}
        hasCopy={false}
      />
    </>
  )
}
