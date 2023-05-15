import ArrowSvg from "../../assets/arrow-down.svg";
import pic from "../../assets/site-pics/islam-hist.png";

function Islam() {
    return (
        <div>
            <div className="header-section">
                <h1>What is Islam?</h1>
                <h3>The Five Pillars of Islam & More</h3>
            </div>
            <div className="info-text" style={{textAlign: 'center'}}>
                <h2>About Islam</h2>
                <p>The word Islam is Arabic for "submission" or "surrender" to the will of God. It derives from the word "salam", or peace. According to the Quran, the Muslim holy book, mankind was created to worship and obey God. Islam recognizes that humankind can freely choose to obey or disobey God, but will ultimately be held accountable by God in the next life for the choices we make in this life. Muslims believe that God sent down prophets and messengers such as Nuh (Noah), Ibrahim (Abraham), Musa (Moses), Isa (Jesus), and Muhaammad to teach mankind how to worship God. These prophets all carried the same message, that there is no deity worthy of worship except the One True God, or Allah in Arabic. Muslims believe that Muhammad is the final and true prophet of God sent to all of humanity.</p>
            </div>
            <div className="next-arrow-div">
                <h6 className="read-full-story-subhead">The Five Pillars of Islam</h6>
                <img 
                    className="arrow-down"
                    src={ArrowSvg}
                    alt="Down Arrow"
                />
            </div>
            <div className="pillars">
              <div>
                <h2>Shahadah</h2>
                <h3>TESTIMONY OF FAITH</h3>
                <p>The Shahadah is a verbal declaration of faith. The Shahadah is said by all Muslims as well as people who revert to Islam. By saying the Shahadah and wholeheartedly believing in the statement, a person becomes Muslim. The Shahadah in Arabic is "ash hadu an la ilaha illa Allah wa ash hadu anna Muhammadan rasoolullah", and this translates as "I bear witness that there is no deity worthy of my worship except Allah (God), and I bear witness that Muhammad is the messenger of Allah".</p>
                <h2>Hajj</h2>
                <h3>PILGRIMAGE</h3>
                <p>Hajj is the annual Muslim pilgrimage to Makkah, located in present day Saudi Arabia. Muslims are required to perform the pilgrimage to Makkah at least once in their lifetime if they are physically and financial able to do so. All pilgrims, regardless of race, social status, and levels of faith where the same Ihram (a simple white cloth), highlighting the fact that all of humanity is equal in the eyes of God. Hajj makes Muslims realize their true purpose in this world, and pilgrims perform rituals that make them reflect on the afterlife as well as renew their purpose in this world. Hajj begins in the 12th month of the Islamic calendar, and sees over 2 million pilgrims every year.</p>
                <h2>Sawm / Ramadan</h2>
                <h3>FASTING IN RAMADAN</h3>
                <p>Muslims are required to fast during Ramadan, the ninth month in the Islamic lunar calendar. During the 29-30 days of Ramadan, Muslims are required to abstain from food, drink, and intimacy during the day. The purpose of fasting, in the Quran, is to make us more conscious. Among the many benefits of fasting include the physical benefits of fasting on the body, freeing oneself from worldly desires, empathy for the poor, and appreciation of blessings. Ramadan is also a month of increased worship and righteous acts for Muslims, and is celebrated with Eid-ul-Fitr at its conclusion.</p>
              </div>
              <div>
                <h2>Salah</h2>
                <h3>PRAYER</h3>
                <p>Salat refers to the obligatory prayers which are performed five times a day, and are a direct link between the worshiper and God. Muslims are obligated to pray at five different times during the day: before sunrise, midday, late afternoon, sunset, and during the nighttime. The prayer ritual is over 1400 years old, and is performed by hundreds of millions of Muslims around the world each day.</p>
                <h2>Zakat</h2>
                <h3>ALMS (OR CHARITY) GIVING</h3>
                <p>Zakat, which means "purification" and "growth" in Arabic, refers to giving a certain amount of one's wealth to the less fortunate every year. Zakat has many benefits, such as recognizing that wealth is a blessing from God, freeing ourselves from greed and selfishness, and learning self-discipline.</p>
                <img src={pic} style={{width: '100%'}}/>
              </div>
            </div>
        </div>
    );
};

export default Islam;