import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProjectProps } from '../../Interface';
import style from './SingleProject.module.scss';

export const SingleProject = () => {
  const [singleProject, setSingleProject] = useState<IProjectProps | null>(
    null,
  );
  let { id } = useParams();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        `https://63ac2eb7cf281dba8c35cb75.mockapi.io/portfolio/${id}`,
      );
      const data = await res.json();
      setSingleProject(data);
    };
    fetchProjects();
  }, []);

  console.log(singleProject);

  if (!singleProject) return null;
  return (
    <>
      <div className={style.project}>{singleProject.id}</div>

      <div className={style.project}>{singleProject.descr}</div>
    </>
  );
};
