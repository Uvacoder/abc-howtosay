import { Disclosure } from '@headlessui/react';
import { Flow, IQnA } from 'lib/types';
import React, { FunctionComponent } from 'react';
import { ArrowRight, ArrowUp } from 'react-feather';

interface IQuestionCardProps {
  qna: IQnA;
}

const QuestionCard: FunctionComponent<IQuestionCardProps> = ({
  qna,
}): JSX.Element => {
  const question = qna.flow === Flow.A_TO_B ? qna.question : qna.answer;
  const answers =
    qna.flow === Flow.A_TO_B
      ? [qna.answer, ...(qna.alternativeAnswers || [])]
      : [qna.question];

  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <div className="my-2">
            <Disclosure.Button className="flex w-full items-center justify-between gap-2 bg-primary-100 px-4 py-6 text-left text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
              <h3 className="text-xl font-bold leading-9 tracking-tight xl:text-2xl">
                {question}
              </h3>
              <span className="h-6 w-6">
                <ArrowUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } text-primary-500`}
                />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="bg-primary-200">
              <ul className="px-4 py-4 text-xl font-medium text-gray-800">
                {(answers || []).map((answer, index) => (
                  <li className="my-1 flex items-start gap-2" key={index}>
                    <span className="mt-0.5 text-primary-900">
                      <ArrowRight />
                    </span>
                    <div>{answer}</div>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default QuestionCard;
