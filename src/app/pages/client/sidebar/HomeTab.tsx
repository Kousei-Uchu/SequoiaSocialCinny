import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Icons } from 'folds';
import { useAtomValue } from 'jotai';
import { getRoomsPath, joinPathComponent } from '../../pathUtils';
import { SidebarAvatar, SidebarItem, SidebarItemTooltip } from '../../../components/sidebar';
import { ScreenSize, useScreenSizeContext } from '../../../hooks/useScreenSize';
import { useNavToActivePathAtom } from '../../../state/hooks/navToActivePath';
import { useHomeSelected } from '../../../hooks/router/useHomeSelected';

export function HomeTab() {
  const navigate = useNavigate();
  const screenSize = useScreenSizeContext();
  const navToActivePath = useAtomValue(useNavToActivePathAtom());
  const homeSelected = useHomeSelected();

  const handleHomeClick = () => {
    const activePath = navToActivePath.get('rooms');
    if (activePath && screenSize !== ScreenSize.Mobile) {
      navigate(joinPathComponent(activePath));
      return;
    }

    navigate(getRoomsPath());
  };

  return (
    <SidebarItem active={homeSelected}>
      <SidebarItemTooltip tooltip="Home">
        {(triggerRef) => (
          <SidebarAvatar as="button" ref={triggerRef} outlined onClick={handleHomeClick}>
            <Icon src={Icons.Home} filled={homeSelected} />
          </SidebarAvatar>
        )}
      </SidebarItemTooltip>
    </SidebarItem>
  );
}
