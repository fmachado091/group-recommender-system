import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Group from '../Group';
import GroupsAppBar from './AppBar';
import CreateGroupButton from './CreateGroup';

const ContentWrapper = styled.div`
  padding: 0 24px;
  margin: auto;
  max-width: 900x;
`;

export function Groups({ user, groups, onNewGroupClicked, onAddUserClicked, onRemoveUserClick }) {
  const groupItems = groups.filter((group) => group.users.length > 0).map((group, index) => 
    (<Group
      key={group.id}
      name={index + 1}
      users={group.users}
      onAddUserClicked={onAddUserClicked}
      onUserClick={onRemoveUserClick(group.id)}
      groupId={group.id}
    />)
  );

  return (
    <div>
      <GroupsAppBar userName={user.id} />
      <ContentWrapper>
        { groupItems }
      </ContentWrapper>
      <CreateGroupButton onClick={onNewGroupClicked(user)} />
    </div>
  );
}

Groups.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onRemoveUserClick: PropTypes.func.isRequired,
  onNewGroupClicked: PropTypes.func.isRequired,
  onAddUserClicked: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      users: PropTypes.arrayOf(
        PropTypes.string,
      ),
    }),
  ),
};

export default Groups;