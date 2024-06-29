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
                    <th>Updated Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data.sort((a, b) => b.updatedScore - a.updatedScore).map((team, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{team.teamName}</td>
                      <td>{team.domain}</td>
                      <td>{team.teamLead}</td>
                      <td>{team.updatedScore}</td>
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
    "teamName": "Dronachaarya",
    "domain": "AERO",
    "teamLead": "Krupa Pai",
    "updatedScore": 75
  },
  {
    "teamName": "AirBenders",
    "domain": "AERO",
    "teamLead": "Jeet Gurbani",
    "updatedScore": 58
  },
  {
    "teamName": "AvianEye",
    "domain": "AERO",
    "teamLead": "Devyani Nandagaoli",
    "updatedScore": 0
  },
  {
    "teamName": "Vampire",
    "domain": "AERO",
    "teamLead": "Ayush Bhaskar",
    "updatedScore": 18
  },
  {
    "teamName": "AirEagle",
    "domain": "AERO",
    "teamLead": "Param Aghera",
    "updatedScore": 42
  },
  {
    "teamName": "Udta Kabootar",
    "domain": "AERO MECHATRONICS",
    "teamLead": "Aabha Lahurikar",
    "updatedScore": 61
  },
  {
    "teamName": "Beacon",
    "domain": "AERO/SPACE",
    "teamLead": "Arkadeep Saha",
    "updatedScore": 81
  },
  {
    "teamName": "Goddard",
    "domain": "SPACE/AERO",
    "teamLead": "Om Nunase",
    "updatedScore": 78
  },
  {
    "teamName": "Skunkworks",
    "domain": "AERO",
    "teamLead": "Johan Sam Biju",
    "updatedScore": 0
  },
  {
    "teamName": "Quantum",
    "domain": "HARDWARE",
    "teamLead": "Aarya Kshirsagar",
    "updatedScore": 72
  },
  {
    "teamName": "Elec Serpent",
    "domain": "HARDWARE",
    "teamLead": "Khushi Chandak",
    "updatedScore": 50
  },
  {
    "teamName": "ROBarmOTICS",
    "domain": "HARDWARE",
    "teamLead": "Madhav Agrawal",
    "updatedScore": 84
  },
  {
    "teamName": "AutoNote",
    "domain": "HARDWARE",
    "teamLead": "Aniket Gupta",
    "updatedScore": 77
  },
  {
    "teamName": "piyushkedost",
    "domain": "HARDWARE",
    "teamLead": "Siddhant Sapkal",
    "updatedScore": 6
  },
  {
    "teamName": "EVIBE",
    "domain": "HARDWARE IOT",
    "teamLead": "Manglam Kartik",
    "updatedScore": 70
  },
  {
    "teamName": "FitPerk",
    "domain": "HARDWARE SPORTS",
    "teamLead": "Shubham Talwaria",
    "updatedScore": 65
  },
  {
    "teamName": "Tinkerers",
    "domain": "HEALTH HARDWARE",
    "teamLead": "Avishkar Bahirwar",
    "updatedScore": 75
  },
  {
    "teamName": "Mirrors",
    "domain": "HARDWARE",
    "teamLead": "Anshu Mishra",
    "updatedScore": 60
  },
  {
    "teamName": "MORENO PERITO",
    "domain": "SUSTAINABILITY",
    "teamLead": "Ishan Yadu",
    "updatedScore": 64
  },
  {
    "teamName": "Team Hope",
    "domain": "SUSTAINABILITY",
    "teamLead": "Anuj Patel",
    "updatedScore": 78
  },
  {
    "teamName": "OPDex",
    "domain": "HEALTHCARE",
    "teamLead": "Tanushree Singh",
    "updatedScore": 70
  },
  {
    "teamName": "Team Alzolve",
    "domain": "HEALTHCARE",
    "teamLead": "Manya Shah",
    "updatedScore": 92
  },
  {
    "teamName": "EcoGenius",
    "domain": "IOT HARDWARE",
    "teamLead": "Astha Sahu",
    "updatedScore": 90
  },
  {
    "teamName": "The Night's Watch",
    "domain": "IOT HARDWARE",
    "teamLead": "Soham Dasgupta",
    "updatedScore": 80
  },
  {
    "teamName": "Rolling Rascals",
    "domain": "MECHATRONICS",
    "teamLead": "Ayush Kumar",
    "updatedScore": 84
  },
  {
    "teamName": "Varuna",
    "domain": "MECHATRONICS",
    "teamLead": "Sangeetha Durgam",
    "updatedScore": 67
  },
  {
    "teamName": "KeedaBot",
    "domain": "MECHATRONICS",
    "teamLead": "Manan Mehta",
    "updatedScore": 66
  },
  {
    "teamName": "Identifier",
    "domain": "AI & ML",
    "teamLead": "Sahil Kukreja",
    "updatedScore": 80
  },
  {
    "teamName": "SAPP.printz",
    "domain": "AI & ML",
    "teamLead": "Shresth Keshari",
    "updatedScore": 67
  },
  {
    "teamName": "Shayona",
    "domain": "AI & ML",
    "teamLead": "Tanmay Mandaliya",
    "updatedScore": 75
  },
  {
    "teamName": "Git Gud",
    "domain": "WEB DEV",
    "teamLead": "Anasmit Mitra",
    "updatedScore": 76
  },
  {
    "teamName": "ByteMeBaby",
    "domain": "AI & ML",
    "teamLead": "Gulshan Kumar",
    "updatedScore": 70
  },
  {
    "teamName": "Avengers",
    "domain": "AI & ML",
    "teamLead": "Rajnikant Semar",
    "updatedScore": 56
  },
  {
    "teamName": "NoName",
    "domain": "AI & ML",
    "teamLead": "Ranbir Sinha",
    "updatedScore": 61
  },
  {
    "teamName": "InstiVerse",
    "domain": "AI & ML",
    "teamLead": "Arush Narayan Srivastav",
    "updatedScore": 79
  },
  {
    "teamName": "Cropto Crafters",
    "domain": "Web3",
    "teamLead": "Sobhin",
    "updatedScore": 81
  },
  {
    "teamName": "The DAM Dynamos",
    "domain": "AI & ML",
    "teamLead": "Sujal Kumar Sahoo",
    "updatedScore": 46
  },
  {
    "teamName": "Neural Brushstrokes",
    "domain": "AI & ML",
    "teamLead": "Shubham Ingale",
    "updatedScore": 86
  },
  {
    "teamName": "ChessMasters",
    "domain": "AI & ML",
    "teamLead": "Parth Rasal",
    "updatedScore": 89
  }
]
