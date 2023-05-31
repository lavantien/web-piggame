'use strict'

const buttonRoll = document.querySelector('.wrapper-app .button.roll')
const buttonHold = document.querySelector('.wrapper-app .button.hold')
const buttonNew = document.querySelector('.wrapper-app .button.new')

const dice = document.querySelector('.wrapper-app .dice')
const playerACurrentScore = document.querySelector(
	'.wrapper-app .wrapper-main .area#player-a .section.current',
)
const playerBCurrentScore = document.querySelector(
	'.wrapper-app .wrapper-main .area#player-b .section.current',
)
const playerATotalScore = document.querySelector(
	'.wrapper-app .wrapper-main .area#player-a .section.score',
)
const playerBTotalScore = document.querySelector(
	'.wrapper-app .wrapper-main .area#player-b .section.score',
)

function init() {
	dice.textContent = 0
	playerACurrentScore.textContent = 0
	playerBCurrentScore.textContent = 0
	playerATotalScore.textContent = 0
	playerBTotalScore.textContent = 0
}
init()

buttonRoll.addEventListener('click', () => {
	dice.textContent = Math.floor(Math.random() * 6) + 1
})
buttonHold.addEventListener('click', () => { })
buttonNew.addEventListener('click', init)
