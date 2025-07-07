import React from 'react';
import { Box, Icon, IconButton, Icons, Scroll, Switch, Text } from 'folds';
import { Page, PageContent, PageHeader } from '../../../components/page';
import { SequenceCard } from '../../../components/sequence-card';
import { useSetting } from '../../../state/hooks/settings';
import { settingsAtom } from '../../../state/settings';
import { SettingTile } from '../../../components/setting-tile';
import { SequenceCardStyle } from '../styles.css';

function Dyslexia() {
  const [useOpenDyslexic, setOpenDyslexic] = useSetting(settingsAtom, 'useOpenDyslexic');

  return (
    <Box direction="Column" gap="100">
      <Text size="L400">Dyslexia</Text>
      <SequenceCard className={SequenceCardStyle} variant="SurfaceVariant" direction="Column">
        <SettingTile
          title="OpenDyslexic"
          description="Use OpenDyslexic as the default font for easier reading"
          after={<Switch variant="Primary" value={useOpenDyslexic} onChange={setOpenDyslexic} />}
        />
      </SequenceCard>
    </Box>
  );
}

type SpicySettingsProps = {
  requestClose: () => void;
};
export function SpicySettings({ requestClose }: SpicySettingsProps) {
  return (
    <Page>
      <PageHeader outlined={false}>
        <Box grow="Yes" gap="200">
          <Box grow="Yes" alignItems="Center" gap="200">
            <Text size="H3" truncate>
              Spicy Settings
            </Text>
          </Box>
          <Box shrink="No">
            <IconButton onClick={requestClose} variant="Surface">
              <Icon src={Icons.Cross} />
            </IconButton>
          </Box>
        </Box>
      </PageHeader>
      <Box grow="Yes">
        <Scroll hideTrack visibility="Hover">
          <PageContent>
            <Box direction="Column" gap="700">
              <Dyslexia />
            </Box>
          </PageContent>
        </Scroll>
      </Box>
    </Page>
  );
}
