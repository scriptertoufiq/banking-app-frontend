import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardTopbar from '../components/dashboard/DashboardTopbar'
import PortfolioOverviewCard from '../components/dashboard/PortfolioOverviewCard'
import MfsAccountsCard from '../components/dashboard/MfsAccountsCard'
import RecentTransactionsCard from '../components/dashboard/RecentTransactionsCard'
import BeneficiariesCard from '../components/dashboard/BeneficiariesCard'

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <DashboardSidebar />

      <div className="dashboard-content">
        <DashboardTopbar />

        <main className="dashboard-main">
          <section className="dashboard-main__row dashboard-main__row--top">
            <PortfolioOverviewCard />
            <MfsAccountsCard />
          </section>

          <section className="dashboard-main__row dashboard-main__row--bottom">
            <RecentTransactionsCard />
            <BeneficiariesCard />
          </section>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage
