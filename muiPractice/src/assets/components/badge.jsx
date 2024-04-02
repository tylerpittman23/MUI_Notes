import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge({ count }) {
  return (
    <Badge badgeContent={count} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}