import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log('✅ init')
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    console.log('✅ Particles loaded')
  }, [])


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles"
      options={{
        background: { color: { value: '#121212' } },
        fpsLimit: 60,
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outMode: 'bounce'
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.3 }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticlesBackground