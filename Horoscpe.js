console.log(" _____________________________________")
console.log("|   Symbol    |   Name      |   Month |")
console.log("|-------------------------------------|")
console.log("|     ♑      | Capricorn   |January  |")
console.log("|     ♒      |	Aquarius    |February |")
console.log("|     ♓      |	Pisces	    |March    |")
console.log("|     ♈      |	Aries	    |April    |")
console.log("|     ♉      |	Taurus	    |May      |")
console.log("|     ♊      |	Gemini	    |June     |") 
console.log("|     ♋      |	Cancer	    |July     |")  
console.log("|     ♌      |	Leo	        |August   |")
console.log("|     ♍      |	Virgo       |September|")
console.log("|     ♎      |	Libra       |October  |")
console.log("|     ♏      |	Scorpio	    |November |")
console.log("|     ♐      |	Sagittarius |December |")
console.log("---------------------------------------")
let month=prompt("Enter your born month:")
month=month.toLowerCase()
console.log("Let's see what future beholds for your!!!!!!")
if(month==="january"){
    console.log("This day holds promise for you, Capricorn. With the universe aligning in your favor, opportunities for personal and professional growth are at your doorstep. Embrace them with confidence. Strengthening connections with others will play a crucial role in your journey today. Remember, the positive energy you put out is what you'll receive in return.")
}
else if(month ==="feburary"){
    console.log("Today marks a day of creativity and personal development for Aquarius. Your ability to approach situations differently will bring about positive changes in both personal and professional spheres. Challenges may present themselves, but your unique perspective and innovative problem-solving skills will allow you to navigate through with ease. Embrace the unexpected and utilize your strengths for the most beneficial outcomes.")
}
else if(month ==="march"){
    console.log("Pisces, your intuition and creativity are heightened today, making it an excellent day to explore new opportunities. However, with these opportunities come challenges. Approach each situation with an open mind and rely on your gut feelings to guide you through. Maintaining balance between work and personal life is key today.")
}
else if(month ==="april"){
    console.log("Today, Aries, you find yourself buzzing with energy, ready to tackle any challenges that come your way. It's a great day for personal development and taking bold steps towards your goals. Embrace the change that's happening around you, as it will lead to positive growth. Stay focused, but also be ready to adapt to new situations. Your dynamism is your greatest asset today.")
}
else if(month ==="may"){
    console.log("Today's energies bring unexpected shifts that, while initially unsettling, will guide you toward positive change and growth. Embrace these changes with an open mind and heart. They will challenge you but ultimately lead you to discover new opportunities and understandings. Today is a day for learning, adapting, and moving forward with confidence.")
}
else if(month ==="june"){
    console.log("Today, Gemini, you'll find yourself on a path of self-discovery, urged by unexpected meetings and ideas. These experiences, though initially startling, will prompt a profound introspection that guides you towards personal growth. Your adaptability will be your strongest asset as you navigate through these revelations.")
}
else if(month ==="july"){
    console.log("This day brings a potent mix of challenges and opportunities for Cancers, encouraging you to embrace change and growth. Your intuitive nature will guide you through any uncertainties, while the alignment of the stars favors new beginnings. Stay open to unconventional ideas and be ready to pivot where necessary. Your adaptability is your strength today.")
}
else if(month ==="august"){
    console.log("This day brings with it a whirlwind of opportunities and challenges for you, Leo. As the stars align in your favor, it's time to embrace change and take bold steps forward. Whether it's your personal life or career, keep an optimistic outlook and be ready to adapt. Your charisma and determination will be key in turning the tides in your favor.")
}
else if(month ==="september"){
    console.log("Your ability to remain calm and patient amidst today’s challenging situations will lead to a balanced day full of both learning opportunities and accomplishments. Embrace a strategic approach to your tasks and interactions to make the most out of them.")
}
else if(month ==="october"){
    console.log("This day highlights the importance of maintaining equilibrium in your personal and professional life. Engaging conversations might offer valuable insights, steering you towards making more informed decisions. Your knack for diplomacy will aid in navigating tricky situations smoothly. Keep an open mind, as unexpected solutions to longstanding issues could emerge.")
}
else if(month ==="november"){
    console.log("Today is a day of transformation for Scorpios, offering a unique blend of opportunities and challenges that can lead to personal growth. Trust your instincts as they guide you through unexpected changes. Embrace the new experiences that come your way, as they are stepping stones to achieving your dreams.")
}
else if(month ==="december"){
    console.log("Today holds the promise of growth and personal development for Sagittarius. The stars encourage you to step out of your comfort zone and explore new opportunities. Positive energy surrounds your personal and professional life, making it a great day to take initiative on pending projects or start new ventures. Trust your instincts, and you might just find yourself on a rewarding new path.")
}
else {
    console.log("Please enter a valid month")
}
