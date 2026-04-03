import ScheduleStatementSidebar from '../components/schedule-statement/ScheduleStatementSidebar'
import ScheduleStatementTopbar from '../components/schedule-statement/ScheduleStatementTopbar'
import RequestStatementHeader from '../components/schedule-statement/RequestStatementHeader'
import SelectAccountCard from '../components/schedule-statement/SelectAccountCard'
import TimelineSpecificationCard from '../components/schedule-statement/TimelineSpecificationCard'
import DeliveryOptionsCard from '../components/schedule-statement/DeliveryOptionsCard'
import AutomaticScheduleCard from '../components/schedule-statement/AutomaticScheduleCard'
import RequestSummaryCard from '../components/schedule-statement/RequestSummaryCard'
import SecurityBanner from '../components/schedule-statement/SecurityBanner'
import FooterBar from '../components/schedule-statement/FooterBar'

function ScheduleStatementPage() {
  return (
    <div className="schedule-page">
      <ScheduleStatementSidebar />

      <div className="schedule-page__content">
        <ScheduleStatementTopbar />

        <main className="schedule-main">
          <RequestStatementHeader />

          <section className="schedule-layout">
            <div className="schedule-layout__left">
              <SelectAccountCard />
              <TimelineSpecificationCard />
              <DeliveryOptionsCard />
              <AutomaticScheduleCard />
            </div>

            <div className="schedule-layout__right">
              <RequestSummaryCard />
              <SecurityBanner />
            </div>
          </section>
        </main>

        <FooterBar />
      </div>
    </div>
  )
}

export default ScheduleStatementPage
