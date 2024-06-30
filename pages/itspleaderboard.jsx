import MainLayout from '@/components/mainlayout'
import React from 'react'
import styles from '@/styles/style.module.css'

function itspleaderboard() {
  return (
    <MainLayout>
        <div className={styles.leaderboard} >
            <h1>Review Meet 1 Leaderboard</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Team Name</th>
                    <th>Domain</th>
                    <th>Team Lead</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data.sort((a, b) => b.score - a.score).map((team, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{team.name}</td>
                      <td>{team.domain}</td>
                      <td>{team.teamLead}</td>
                      <td>{team.score.toFixed(0)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

        </div>
    </MainLayout>
  )
}

export default itspleaderboard


const data = [
  {
      "name": "Dronachaarya",
      "domain": "AERO",
      "teamLead": "Krupa Pai",
      "score": 67.5
  },
  {
      "name": "AirBenders",
      "domain": "AERO",
      "teamLead": "Jeet Gurbani",
      "score": 50.5
  },
  {
      "name": "AvianEye",
      "domain": "AERO",
      "teamLead": "Devyani Nandagaoli",
      "score": 0
  },
  {
      "name": "Vampire",
      "domain": "AERO",
      "teamLead": "Ayush Bhaskar",
      "score": 51
  },
  {
      "name": "AirEagle",
      "domain": "AERO",
      "teamLead": "Param Aghera",
      "score": 55.5
  },
  {
      "name": "Udta Kabootar",
      "domain": "AERO MECHATRONICS",
      "teamLead": "Aabha Lahurikar",
      "score": 55
  },
  {
      "name": "Beacon",
      "domain": "AERO/SPACE",
      "teamLead": "Arkadeep Saha",
      "score": 73.5
  },
  {
      "name": "Goddard",
      "domain": "SPACE/AERO",
      "teamLead": "Om Nunase",
      "score": 70
  },
  {
      "name": "Quantum",
      "domain": "HARDWARE",
      "teamLead": "Aarya Kshirsagar",
      "score": 71.525
  },
  {
      "name": "Elec Serpent",
      "domain": "HARDWARE",
      "teamLead": "Khushi Chandak",
      "score": 49.525
  },
  {
      "name": "ROBarmOTICS",
      "domain": "HARDWARE",
      "teamLead": "Madhav Agrawal",
      "score": 83.525
  },
  {
      "name": "AutoNote",
      "domain": "HARDWARE",
      "teamLead": "Aniket Gupta",
      "score": 76.525
  },
  {
      "name": "piyushkedost",
      "domain": "HARDWARE",
      "teamLead": "Siddhant Sapkal",
      "score": 0
  },
  {
      "name": "EVIBE",
      "domain": "HARDWARE IOT",
      "teamLead": "Manglam Kartik",
      "score": 69.525
  },
  {
      "name": "FitPerk",
      "domain": "HARDWARE SPORTS",
      "teamLead": "Shubham Talwaria",
      "score": 64.525
  },
  {
      "name": "Tinkerers",
      "domain": "HEALTH HARDWARE",
      "teamLead": "Avishkar Bahirwar",
      "score": 74.525
  },
  {
      "name": "Mirrors",
      "domain": "HARDWARE",
      "teamLead": "Anshu Mishra",
      "score": 59.525
  },
  {
      "name": "MORENO PERITO",
      "domain": "SUSTAINIBILITY",
      "teamLead": "Ishan Yadu",
      "score": 55.989
  },
  {
      "name": "Team Hope",
      "domain": "SUSTAINIBILITY",
      "teamLead": "Anuj Patel",
      "score": 69.989
  },
  {
      "name": "OPDex",
      "domain": "HEALTHCARE",
      "teamLead": "Tanushree Singh",
      "score": 61.489
  },
  {
      "name": "Team Alzolve",
      "domain": "HEALTHCARE",
      "teamLead": "Manya Shah",
      "score": 83.489
  },
  {
      "name": "EcoGenius",
      "domain": "IOT HARDWARE",
      "teamLead": "Astha Sahu",
      "score": 81.989
  },
  {
      "name": "The Night's Watch",
      "domain": "IOT HARDWARE",
      "teamLead": "Soham Dasgupta",
      "score": 71.989
  },
  {
      "name": "Rolling Rascals",
      "domain": "MECHATRONICS",
      "teamLead": "Ayush Kumar",
      "score": 75.489
  },
  {
      "name": "Varuna",
      "domain": "MECHATRONICS",
      "teamLead": "Sangeetha Durgam",
      "score": 58.989
  },
  {
      "name": "KeedaBot",
      "domain": "MECHATRONICS",
      "teamLead": "Manan Mehta",
      "score": 57.989
  },
  {
      "name": "Identifier",
      "domain": "AI & ML",
      "teamLead": "Sahil Kukreja",
      "score": 79.5167
  },
  {
      "name": "SAPP.printz",
      "domain": "AI & ML",
      "teamLead": "Shresth Keshari",
      "score": 66.5167
  },
  {
      "name": "Shayona",
      "domain": "AI & ML",
      "teamLead": "Tanmay Mandaliya",
      "score": 74.5167
  },
  {
      "name": "Git Gud",
      "domain": "WEB DEV",
      "teamLead": "Anasmit Mitra",
      "score": 75.5167
  },
  {
      "name": "ByteMeBaby",
      "domain": "AI & ML",
      "teamLead": "Gulshan Kumar",
      "score": 69.5167
  },
  {
      "name": "Avengers",
      "domain": "AI & ML",
      "teamLead": "Rajnikant Semar",
      "score": 55.5167
  },
  {
      "name": "NoName",
      "domain": "AI & ML",
      "teamLead": "Ranbir Sinha",
      "score": 60.5167
  },
  {
      "name": "InstiVerse",
      "domain": "AI & ML",
      "teamLead": "Arush Narayan Srivastav",
      "score": 70
  },
  {
      "name": "Cropto Crafters",
      "domain": "Web3",
      "teamLead": "Sobhin",
      "score": 80.5167
  },
  {
      "name": "The DAM Dynamos",
      "domain": "AI & ML",
      "teamLead": "Sujal Kumar Sahoo",
      "score": 45.5167
  },
  {
      "name": "Neural Brushstrokes",
      "domain": "AI & ML",
      "teamLead": "Shubham Ingale",
      "score": 85.5167
  },
  {
      "name": "ChessMasters",
      "domain": "AI & ML",
      "teamLead": "Parth Rasal",
      "score": 88.5167
  }
]
