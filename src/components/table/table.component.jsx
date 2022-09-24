import { unrekt } from '../../utils/unrekt';

import RedFlags from '../redflags/redflags.component';

import '../unrekt/unrekt.scss';

const Table = () => {
  return (
    <div
      className="container w-full flex flex-col justify-center items-center"
      id="unrekt"
    >
      <div className="container  flex flex-col justify-center items-center p-5">
        <h2 className="prose text-md text-white">Table of Content</h2>
        <ul className="text-xs text-white grid grid-cols-2 text-left p-1">
          {unrekt.map((category) => {
            return (
              <li>
                <a href={`#${category.category}`}>
                  {category.id} · {category.category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <table className="table table-zebra text-center border-2 border-[#333] rounded-lg">
        <thead className="prose text-sm">
          <tr>
            <th>Category</th>
            <th>Question</th>
            <th>Example / Guidelines</th>
            <th>Link / Tools</th>
          </tr>
        </thead>
        <tbody>
          {unrekt.map((category) => {
            console.log(category);
            return (
              <>
                <h2
                  className="prose text-sm text-center text-white"
                  id={category.category}
                >
                  {category.id} · {category.category.toUpperCase()}
                </h2>
                {category.content.map((subCategory) => {
                  return (
                    <>
                      <tr className="">
                        <td>
                          <h3 className="prose text-sm p-5">
                            {subCategory.subId} {subCategory.subCategory}
                          </h3>
                        </td>
                        <td className="">
                          <ul className="text-xs prose flex flex-col justify-center items-center p-5">
                            {subCategory.questions.map((question) => {
                              return (
                                <li className="text-center">
                                  <p className="overflow">{question}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                        <td className="">
                          <ul className="maw-w-[25vw] text-xs prose flex flex-col justify-center items-center p-5">
                            {subCategory.checklist.map((check) => {
                              return (
                                <li className="text-center maw-w-[25vw]">
                                  <p className="overflow">{check}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                        <td className="max-w-[25vw]">
                          <ul className="maw-w-[25vw] text-xs prose overflow flex flex-col justify-center items-center p-10">
                            {subCategory.tools.map((tool) => {
                              return (
                                <li className="text-justify maw-w-[25vw] flex flex-col justify-center items-center">
                                  <a href={tool.link} className="link">
                                    {tool.tldr}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
      <RedFlags />
    </div>
  );
};

export default Table;
