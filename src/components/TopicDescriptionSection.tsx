import React from 'react';

const description = [{
  title: '',
  desc: `In the digital age, email has become a critical communication tool for individuals and organizations worldwide. However, this convenience also opens the door to various security threats, with email phishing being one of the most insidious. Phishing attacks, designed to steal sensitive information by masquerading as trustworthy entities, have evolved in sophistication and scale, making it imperative for everyone to stay vigilant.`
}, {
  title: 'Understanding Email Phishing',
  desc: 'Email phishing is a cybercrime in which attackers send fraudulent messages to trick recipients into revealing personal information, such as passwords, credit card numbers, and Social Security numbers. These emails often create a sense of urgency, prompting the victim to act quickly without due diligence. They might appear to come from a known contact or an authoritative organization, making them particularly deceptive.'
}, {
  title: 'Recognizing the Red Flags',
  desc: 'The first step in defending against phishing attacks is to recognize their common characteristics. Suspicious emails often contain urgent requests for sensitive information, discrepancies in email addresses, links to unsecured websites, and spelling and grammar errors. For instance, an email claiming to be from your HR department asking for bank details under the guise of updating payment systems, as highlighted in the "Stay Alert: Navigating the Dangers of Email Phishing" scenario, is a classic phishing attempt.'
}, {
  title: 'The Importance of Vigilance',
  desc: "Awareness and education are the best defenses against phishing. It's crucial to scrutinize every email, especially those requesting personal information. Verify the sender's email address, look for generic greetings, and be wary of hyperlinks and attachments, as these can be gateways to malicious websites or malware. Implementing strong, unique passwords and utilizing two-factor authentication wherever possible can further safeguard your digital identity."
}, {
  title: 'Best Practices for Email Security',
  desc: "To navigate the dangers of email phishing, adopting best practices for email security is essential. Always double-check the authenticity of requests for personal information, preferably through an alternative communication method. Regularly update your software and security systems to protect against known vulnerabilities. Additionally, educating employees and colleagues about the signs of phishing and establishing a protocol for reporting suspicious emails can strengthen an organization's collective security."
}]
const title = "Stay Alert: Navigating the Dangers of Email Phishing";

const TopicDescriptionSection = () => (
  <div
    className='w-1/3 mr-2 p-2 overflow-hidden'
  >
    <div className="flex flex-col m-5" style={{
      background: 'aliceblue',
      padding: '10px'
    }}>
      <h1 className="font-bold mb-4 text-lg text-center text-blue-600">{title}</h1>
      <div className="overflow-auto p-2" style={{ height: 'calc(100vh - 160px)', fontSize: '0.9rem', lineHeight: '25px' }}>
        {description.map((paragraph) => (
          <>
            {paragraph.title && <h2 className='font-bold mb-2'>{paragraph.title}</h2>}
            <p key={paragraph.title} className="mb-5 leading-relaxed indent-5" style={{ lineHeight: '26px' }}>{paragraph.desc}</p>
          </>
        ))}
      </div>
    </div>
  </div>
);

export default TopicDescriptionSection;
