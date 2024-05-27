import React, { useEffect } from 'react'
import './CursorGlow.css' // Імпортуйте CSS стилі

const CursorGlow = () => {
	useEffect(() => {
		// Перевірка ширини вікна браузера перед додаванням ефекту
		if (window.innerWidth > 768) {
			// Припускаємо, що мобільні пристрої мають ширину <= 768px
			// Створення елемента хмаринки
			const glowElement = document.createElement('div')
			glowElement.classList.add('cursor-glow')

			// Додавання хмаринки до DOM
			document.body.appendChild(glowElement)

			// Функція для оновлення позиції хмаринки
			const moveGlow = (e) => {
				glowElement.style.left = `${e.pageX}px`
				glowElement.style.top = `${e.pageY}px`
			}

			// Додавання обробника подій для відстеження руху миші
			document.addEventListener('mousemove', moveGlow)

			// Прибирання: видаляємо обробник подій та елемент хмаринки при знищенні компоненту
			return () => {
				document.removeEventListener('mousemove', moveGlow)
				document.body?.removeChild(glowElement)
			}
		}
		// Якщо ширина вікна не відповідає умові, компонент не виконує ніяких дій
		return () => {}
	}, [])

	return null // Компонент не рендерить нічого в DOM
}

export default CursorGlow
