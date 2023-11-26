import {Button} from '../../components/button/Button';
import {FormField} from '../../components/formField/FormField';
import {useLocalization} from '../../services/hooks/UseLocalization';
import {useNavigate} from 'react-router-dom';

export const DetailsNotePage = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();

  return <div>Details</div>;
};
