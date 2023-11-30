import React from 'react';
//import TeamIntro from '../Components/TeamIntro';
import TeamMember from '../Components/TeamMember';
//import GroupPhoto from '../Components/GroupPhoto';
import Comments from '../Components/Comments';
import GroupPhoto from '../Components/GroupPhoto';

 const HomePage = ({ teamMembers }) => {
   return (
     <main className="home-page">
       <section className="team-section">
         <div className="team-container">
           {teamMembers.map(member => (
             <TeamMember key={member.name} {...member} />
           ))}
         </div>
       </section>
       <GroupPhoto imageUrl={groupPhotoUrl} />
     </main>
   );
 };

 export default HomePage;