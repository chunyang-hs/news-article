import Mock from "mockjs";
import { v4 as uuidv4 } from 'uuid';
Mock.mock("/api/news", "get", {
  data: [
    {
      id:uuidv4(),
      title:
        "Taiwan legislator leads ferry trial to boost ties with Okinawa island",
      summaries: [
        "YILAN, Taiwan (Kyodo) -- Taiwan's Legislative Speaker You Si-kun led a ferry trial run Tuesday from the island's eastern county of Yilan to Japan's westernmost inhabited island of Yonaguni in a bid to boost tourism and ties between the two sides.",
        "It remains unclear whether You's ferry trip will irk China, which views self-governed Taiwan as a renegade province and opposes any official contact between other countries and the island.",
        "Japan has been bolstering its defense of the Nansei Islands, including Yonaguni, that stretch southwest from Kyushu toward Taiwan, apparently in response to China's intensifying military activities in nearby waters.",
      ],
      publisher: "TheMainichi",
      date: "2023-7-5",
    },
    {
      id:uuidv4(),
      title:
        "Stay at Fukushima until release is complete' IAEA head, to local officials",
      summaries: [
        "International Atomic Energy Agency (IAEA) Secretary-General Grossi, who published a report on the safety of the release, also attended the meeting and stressed the person's willingness to listen to local concerns.",
        "The IAEA commits to remain at Fukushima and continue to inspect the status of the release until the last drop of treated water can be safely released.\"",
        "The person was joined by Mr. Grossi of the IAEA, which released its report on 4th, which identified the site as \"The release plan meets international safety standards.\""
    ],
      publisher: "TheNikkei",
      date: "2023-7-5",
    },
    {
      id:uuidv4(),
      title:
        "French services activity falls for first time since January as demand weakens - PMI",
      summaries: [
        "The French central bank had said last month the economy was on course to avoid a recession this year while inflation pressures eased, though growth would only gradually pick up in the coming two years.",
        "It said the French economy would grow 0.1% in the current quarter from the previous three months and 0.2% in both the third and fourth quarters.",
        "(Reporting by Tassilo Hummel; Editing by Toby Chopra)"
    ],
      publisher: "ReutersNews",
      date: "2023-7-5",
    },
  ],
});
