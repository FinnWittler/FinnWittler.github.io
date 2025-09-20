import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  degree,
  institution,
  index = 0,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
  index?: number;
}) => (
  <li className={`mb-5 pl-4 fade-in-up stagger-${Math.min(index + 1, 5)}`}>
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5 hover:bg-primary transition-colors duration-300"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold hover:text-primary transition-colors duration-200">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          index={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100 fade-in-up hover:shadow-xl transition-shadow duration-300">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70 slide-in-left">Education</span>
            )}
          </h5>
        </div>
        <div className="text-base-content">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4 hover:border-primary hover:border-opacity-50 transition-all duration-300">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {educations.map((item, index) => (
                  <ListItem
                    key={index}
                    index={index}
                    time={`${item.from} - ${item.to}`}
                    degree={item.degree}
                    institution={item.institution}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
