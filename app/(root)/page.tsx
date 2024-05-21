import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
  const loggedIn = { firstName: 'Anthony', lastName: 'Ogugua', email: 'anthony@trustbank.com' };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome back!"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Here's what's happening with your account today."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1} 
          totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50}, 
          {currentBalance: 500}]}
      />
    </section>
  )
  }
  import TotalBalanceBox from '@/components/TotalBalanceBox';

export default Home