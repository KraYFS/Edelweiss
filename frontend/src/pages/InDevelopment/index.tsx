import './styles.scss'

const InDevelopment = () => {
  return (
    <div className='under-construction'>
      <title>Сайт у розробці</title>
      <div className='icon'>🏗️</div>
      <h1>Сайт у розробці</h1>
      <p>Ми скоро завершимо будівництво і повернемося з новим сайтом!</p>
      <div className='loader'>
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  )
}

export default InDevelopment
