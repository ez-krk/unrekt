import { unrekt } from '../../utils/unrekt';

import './unrekt.scss';

const Unrekt = () => {
  console.log(unrekt);
  //   console.log(unrekt.length);
  return (
    <div className="prose text-sm container flex flex-col justify-center items-center border-2  text-center">
      <table className="container w-screen border-red-300">
        <thead className="w-20vw text-center border-2 border-blue-300">
          <tr>
            <th>Category</th>
            <th>Question</th>
            <th>Example/Guidelines</th>
            <th>Link/Tools</th>
          </tr>
        </thead>
        {/* start row */}

        <>
          <div>Team</div>
          <tr className="w-100wv border-2 border-green-300">
            <td className="w-100wv border-2 border-red-800">
              1.1 Team Experience and Expertise
            </td>
            <td className="w-100wv">
              <ul>
                <li>Are the team members known/doxxed ?</li>
                <li>What is the team experience ?</li>
                <li>What relevant domain experience does the team have ?</li>
                <li>Is the team competent enough to deliver on the roadmap?</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Check the team's LinkedIn / Twitter / Github profiles. Be wary
                  of fake profiles.
                </li>
                <li>If the team is unknown == bad sign.</li>
                <li>
                  Check whether the team has sufficient competencies to deliver
                  on their roadmap. It is easy to have big plans, but that does
                  not entail the capability to execute them.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a href="https://www.tutorialspoint.com/how-to-spot-fake-linkedin-profiles#:~:text=You%20should%20see%20the%20user%27s,user%27s%20About%20page%2C%20for%20example.">
                    Tool to check if a LinkedIn profile is fake
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </>

        {/* end row */}
        <tr>
          <td> Table 1 </td>
          <td> Table 1. </td>
        </tr>
      </table>
    </div>
  );
};

export default Unrekt;
