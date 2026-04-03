import TransferSidebar from '../components/transfer-money/TransferSidebar'
import TransferTopbar from '../components/transfer-money/TransferTopbar'
import TransferModeTabs from '../components/transfer-money/TransferModeTabs'
import SourceAccountCard from '../components/transfer-money/SourceAccountCard'
import BeneficiariesCard from '../components/transfer-money/BeneficiariesCard'
import AmountNoteCard from '../components/transfer-money/AmountNoteCard'
import TransferSummaryCard from '../components/transfer-money/TransferSummaryCard'
import AssistanceCard from '../components/transfer-money/AssistanceCard'
import EncryptionBanner from '../components/transfer-money/EncryptionBanner'

function TransferMoneyPage() {
  return (
    <div className="transfer-page">
      <TransferSidebar />

      <div className="transfer-page__content">
        <TransferTopbar />

        <main className="transfer-main">
          <section className="transfer-hero">
            <h1>Transfer Wealth</h1>
            <p>Securely move assets across your global and local accounts.</p>
          </section>

          <TransferModeTabs />

          <section className="transfer-layout">
            <div className="transfer-layout__left">
              <SourceAccountCard />

              <div className="transfer-layout__grid">
                <BeneficiariesCard />
                <AmountNoteCard />
              </div>
            </div>

            <div className="transfer-layout__right">
              <TransferSummaryCard />
              <AssistanceCard />
            </div>
          </section>

          <EncryptionBanner />
        </main>
      </div>
    </div>
  )
}

export default TransferMoneyPage
