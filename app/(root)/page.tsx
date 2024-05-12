import HeaderBox from '@/components/HeaderBox'


const Home = () => {
  const loggedIn = { firstName: 'Anthony'};
}
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
      </div>
    </section>
  )


export default Home