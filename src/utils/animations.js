// Intersection Observer for scroll animations
export const initializeScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Observe all elements with the animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll')
  animateElements.forEach((element) => {
    observer.observe(element)
  })

  return observer
}

// Initialize animations when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeScrollAnimations, 100)
  })
}