// components/TeamSection.tsx
'use client'

type TeamMember = {
  name: string,
  role: string,
  description: string,
  location: string,
  languages: string,
  image: {
    asset: {
      url: string
    }
  }
}

type TeamData = {
  title: string
  subtitle: string
  teamMembers: TeamMember[]
}

export default function TeamSection({ team }: { team: TeamData }) {
  

  if (!team || !team.teamMembers ) {
    return <div>Chargement...</div>
  }

  return (
    <section className="bg-gray-950 text-white py-16 px-6 lg:px-20" id="team">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#ffd700] mb-4">
          {team.title || 'Notre Équipe'}
        </h2>
        <p className="text-center text-white mb-12">
          {team.subtitle || 'Des experts à votre écoute, spécialisés dans plusieurs domaines du droit.'}
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {team.teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-[#ffd700]">
                <img
                  src={member.image.asset.url}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-[#ffd700] text-sm mb-2">{member.role}</p>
              <p className="text-sm text-gray-400 mb-3">{member.description}</p>
              <p className="text-xs text-gray-400 italic">
                📍 {member.location} | 🌍 {member.languages}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
