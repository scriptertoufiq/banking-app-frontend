function TransferModeTabs() {
  return (
    <section className="transfer-tabs" aria-label="Transfer modes">
      <button type="button" className="transfer-tabs__button transfer-tabs__button--active">
        Standard Bank Transfer
      </button>
      <button type="button" className="transfer-tabs__button">
        MFS Transfer
      </button>
    </section>
  )
}

export default TransferModeTabs
