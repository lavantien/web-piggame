'use strict'

const WIN_COND = 4

const ANNOUNCEMENT_DEFAULT = '⬤⬤⬤'
const ANNOUNCEMENT_A = 'Player A has won!'
const ANNOUNCEMENT_B = 'Player B has won!'

const buttonRoll = document.querySelector(
	'.wrapper-app .button.roll')
const buttonHold = document.querySelector(
	'.wrapper-app .button.hold')
const buttonNew = document.querySelector(
	'.wrapper-app .button.new')

const announcement = document.querySelector(
	'.wrapper-app .announcement')
const round = document.querySelector(
	'.wrapper-app .round')
const dice = document.querySelector(
	'.wrapper-app .dice')

const playerACurrentScore = document.querySelector(
	'.wrapper-app .wrapper-main '
	+ '.area#player-a .section.current')
const playerBCurrentScore = document.querySelector(
	'.wrapper-app .wrapper-main '
	+ '.area#player-b .section.current')
const playerATotalScore = document.querySelector(
	'.wrapper-app .wrapper-main '
	+ '.area#player-a .section.score')
const playerBTotalScore = document.querySelector(
	'.wrapper-app .wrapper-main '
	+ '.area#player-b .section.score')

const leftPane = document.querySelector(
	'.wrapper-app .wrapper-main '
	+ '.area#player-a')
const rightPane = document.querySelector(
	'.wrapper-app .wrapper-main '
	+ '.area#player-b')

let turn = true // true: A's turn, false: B's turn
let end = true

function init() {
	announcement.textContent = ANNOUNCEMENT_DEFAULT
	round.textContent = 0
	dice.textContent = 0
	playerACurrentScore.textContent = 0
	playerBCurrentScore.textContent = 0
	playerATotalScore.textContent = 0
	playerBTotalScore.textContent = 0
	end = false
}
init()

buttonRoll.addEventListener('click', () => {
	if (end) {
		return
	}
	dice.textContent = Math.floor(Math.random() * 6) + 1
	if (dice.textContent == 1) {
		changeTurn()
	}
	if (turn) {
		rollLogic(playerACurrentScore, playerBCurrentScore)
	} else {
		rollLogic(playerBCurrentScore, playerACurrentScore)
	}
})
buttonHold.addEventListener('click', () => {
	if (end) {
		return
	}
	if (turn) {
		playerATotalScore.textContent
			= Number(playerATotalScore.textContent)
			+ Number(playerACurrentScore.textContent)
	} else {
		playerBTotalScore.textContent
			= Number(playerBTotalScore.textContent)
			+ Number(playerBCurrentScore.textContent)
	}
	changeTurn()
})
buttonNew.addEventListener('click', init)

function rollLogic(player1, player2) {
	player2.textContent = 0
	if (Number(dice.textContent) !== 1) {
		player1.textContent
			= Number(player1.textContent)
			+ Number(dice.textContent)
	}
}

function changeTurn() {
	if (turn) {
		leftPane.classList.remove('active')
		leftPane.classList.add('inactive')
		rightPane.classList.remove('inactive')
		rightPane.classList.add('active')
	} else {
		rightPane.classList.remove('active')
		rightPane.classList.add('inactive')
		leftPane.classList.remove('inactive')
		leftPane.classList.add('active')
	}
	turn = !turn
	round.textContent
		= Number(round.textContent) + 1
	winCondition()
}

function winCondition() {
	if (Number(round.textContent) === WIN_COND) {
		const totalScoreA
			= Number(playerATotalScore.textContent)
		const totalScoreB
			= Number(playerBTotalScore.textContent)
		if (totalScoreA > totalScoreB) {
			announcement.textContent = ANNOUNCEMENT_A
		} else {
			announcement.textContent = ANNOUNCEMENT_B
		}
		end = true
	}
}