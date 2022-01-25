import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, radios } from '@storybook/addon-knobs';
import { TeamSection1 } from './TeamSection1';
import { TeamSection2 } from './TeamSection2';
import { TeamSection3 } from './TeamSection3';
import { TeamSection4 } from './TeamSection4';
import { TeamSection5 } from './TeamSection5';
import { TeamSection6 } from './TeamSection6';
import { TeamSection7 } from './TeamSection7';
import { TeamSection8 } from './TeamSection8';

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection1',
  () => {
    const majorText = text(
      'majorText',
      'Nulla vulputate nisi eget pulvinar dignissim'
    );
    const description = text(
      'description',
      'Etiam vitae leo vel turpis aliquet laoreet non quis tortor. Praesent feugiat elit dolor, iaculis iaculis nulla dapibus in. Vivamus id tempus mauris.'
    );
    const members = object('members', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Co-Founder/CTO'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Manager, Business Relations'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/305',
        designation: 'Front-end Developer'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/310',
        designation: 'Designer'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/315',
        designation: 'Director, Product Development'
      }
    ]);

    return (
      <TeamSection1
        majorText={majorText}
        description={description}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection2',
  () => {
    const displayOptions = {
      vertical: 'column',
      horizontal: 'row'
    };
    const displayDefaultValue = displayOptions.vertical;
    const displayValue = radios('box', displayOptions, displayDefaultValue);
    const majorText = text('majorText', 'Donec hendrerit');
    const description = text(
      'description',
      ' Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus.'
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'twitter' },
      { id: 2, href: '/', icon: 'linkedin' }
    ]);
    const members = object('stats', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Co-Founder/CTO'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://thishorsedoesnotexist.com/',
        designation: 'Manager, Business Relations'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Front-end Developer'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/305',
        designation: 'Designer'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/310',
        designation: 'Director, Product Development'
      }
    ]);

    return (
      <TeamSection2
        displayValue={displayValue}
        majorText={majorText}
        description={description}
        socialLinks={socialLinks}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection3',
  () => {
    const majorText = text('majorText', 'Nunc nec erat ornare');
    const description = text(
      'description',
      'In at placerat nunc. Vestibulum pellentesque, libero quis lacinia ultrices, diam turpis sodales metus, eu pulvinar lorem massa viverra lorem. Praesent ullamcorper sapien nibh, a iaculis nisl porta ut.'
    );
    const unShuffled = [...Array(70).keys()].splice(0, 25);

    const shuffled = unShuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const members = object('stats', [
      {
        id: 1,
        author: 'AYDEN PENNINGTON',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[0]}`,
        designation: 'Co-Founder/CEO'
      },
      {
        id: 2,
        author: 'GREGORY HANCOCK',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[1]}`,
        designation: 'Co-Founder/CTO'
      },
      {
        id: 3,
        author: 'MADILYN BLACK',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[2]}`,
        designation: 'Manager, Business Relations'
      },
      {
        id: 4,
        author: 'KAYLIE RICHARDS',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[3]}`,
        designation: 'Front-end Developer'
      },
      {
        id: 5,
        author: 'QUINN BLAIR',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[4]}`,
        designation: 'Designer'
      },
      {
        id: 6,
        author: 'ANDREA VAZQUEZ',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[5]}`,
        designation: 'Director, Product Development'
      },
      {
        id: 7,
        author: 'RIVER CARDENAS	',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[6]}`,
        designation: 'Duis diam augue'
      },
      {
        id: 8,
        author: 'OPHELIA MASSEY',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[7]}`,
        designation: 'Duis volutpat ultricies'
      },
      {
        id: 9,
        author: 'REGINALD GATES',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[8]}`,
        designation: 'Interdum et malesuada'
      },
      {
        id: 10,
        author: 'TREASURE SWEET',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[9]}`,
        designation: 'Pellentesque consequat orci'
      },
      {
        id: 11,
        author: 'ALANA LUCAS',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[10]}`,
        designation: 'Mauris vel neque'
      },
      {
        id: 12,
        author: 'JAKE CONNER',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[11]}`,
        designation: 'Fusce et metus'
      },
      {
        id: 13,
        author: 'TYSON MERCER',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[12]}`,
        designation: 'Aliquam sodales elit'
      },
      {
        id: 14,
        author: 'BENSON NORRIS',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[13]}`,
        designation: 'Phasellus ut elit'
      },
      {
        id: 15,
        author: 'KOLE TYLER',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[14]}`,
        designation: 'Aliquam at justo'
      },
      {
        id: 16,
        author: 'ALANA MCDONALD',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[15]}`,
        designation: 'Nullam ornare cursus'
      },
      {
        id: 17,
        author: 'EVIE ALVARADO',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[16]}`,
        designation: 'Maecenas a imperdiet'
      },
      {
        id: 18,
        author: 'JULIUS MCCARTY',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[17]}`,
        designation: 'Maecenas vehicula facilisis'
      },
      {
        id: 19,
        author: 'JOLIE FERRELL',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[18]}`,
        designation: 'Sed semper arcu'
      },
      {
        id: 20,
        author: 'KEATON BUCK',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[19]}`,
        designation: 'Donec ac turpis'
      },
      {
        id: 21,
        author: 'SIENNA FOWLER',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[20]}`,
        designation: 'Praesent vel feugiat'
      },
      {
        id: 22,
        author: 'JEFFERSON LOPEZ',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[21]}`,
        designation: 'Nam aliquam eros'
      },
      {
        id: 23,
        author: 'MYLES STANTON',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[22]}`,
        designation: 'Maecenas sed diam'
      },
      {
        id: 24,
        author: 'ISABELLE COOLEY',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[23]}`,
        designation: 'Donec sed leo'
      },
      {
        id: 25,
        author: 'KONNOR REESE',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[24]}`,
        designation: 'Duis semper accumsan'
      }
    ]);

    return (
      <TeamSection3
        majorText={majorText}
        description={description}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection4',
  () => {
    const majorText = text('majorText', 'Donec hendrerit');
    const description = text(
      'description',
      ' Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus.'
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'twitter' },
      { id: 2, href: '/', icon: 'linkedin' }
    ]);
    const members = object('stats', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Co-Founder/CTO'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Manager, Business Relations'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://thishorsedoesnotexist.com/',
        designation: 'Front-end Developer'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/301',
        designation: 'Designer'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/302',
        designation: 'Director, Product Development'
      }
    ]);

    return (
      <TeamSection4
        majorText={majorText}
        description={description}
        socialLinks={socialLinks}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection5',
  () => {
    const majorText = text('majorText', 'Donec hendrerit');
    const description = text(
      'description',
      ' Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus.'
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'twitter' },
      { id: 2, href: '/', icon: 'linkedin' }
    ]);
    const members = object('stats', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO',
        description:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi, lacinia vulputate arcu lacinia vitae.'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Co-Founder/CTO',
        description:
          'Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.Maecenas et mi euismod, vulputate augue sit amet, mattis mi.'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://thishorsedoesnotexist.com/',
        designation: 'Manager, Business Relations',
        description:
          'Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus. Integer et sapien auctor, blandit magna vitae, finibus justo.'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Front-end Developer',
        description:
          'Maecenas et mi euismod, vulputate augue sit amet, mattis mi. Nulla quis consectetur urna, ut ornare eros. Maecenas et odio ac arcu blandit lacinia.'
      }
    ]);

    return (
      <TeamSection5
        majorText={majorText}
        description={description}
        socialLinks={socialLinks}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection6',
  () => {
    const majorText = text('majorText', 'Donec hendrerit');
    const description = text(
      'description',
      'Maecenas nec varius purus. Integer ullamcorper sollicitudin egestas. Nunc sagittis, nulla eu aliquam fermentum, sapien purus tincidunt justo, id mollis odio dolor a neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'twitter' },
      { id: 2, href: '/', icon: 'linkedin' }
    ]);
    const members = object('stats', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO',
        description:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi, lacinia vulputate arcu lacinia vitae.'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Co-Founder/CTO',
        description:
          'Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.Maecenas et mi euismod, vulputate augue sit amet, mattis mi.'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://thishorsedoesnotexist.com/',
        designation: 'Manager, Business Relations',
        description:
          'Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus. Integer et sapien auctor, blandit magna vitae, finibus justo.'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Front-end Developer',
        description:
          'Maecenas et mi euismod, vulputate augue sit amet, mattis mi. Nulla quis consectetur urna, ut ornare eros. Maecenas et odio ac arcu blandit lacinia.'
      }
    ]);

    return (
      <TeamSection6
        majorText={majorText}
        description={description}
        socialLinks={socialLinks}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection7',
  () => {
    const displayOptions = {
      vertical: 'column',
      horizontal: 'row'
    };
    const displayDefaultValue = displayOptions.horizontal;
    const displayValue = radios('box', displayOptions, displayDefaultValue);
    const majorText = text('majorText', 'Donec hendrerit');
    const members = object('stats', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO',
        description:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi, lacinia vulputate arcu lacinia vitae.'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thishorsedoesnotexist.com/',
        designation: 'Co-Founder/CTO',
        description:
          'Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.Maecenas et mi euismod, vulputate augue sit amet, mattis mi.'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Manager, Business Relations',
        description:
          'Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus. Integer et sapien auctor, blandit magna vitae, finibus justo.'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Front-end Developer',
        description:
          'Maecenas et mi euismod, vulputate augue sit amet, mattis mi. Nulla quis consectetur urna, ut ornare eros. Maecenas et odio ac arcu blandit lacinia.'
      }
    ]);

    return (
      <TeamSection7
        displayValue={displayValue}
        majorText={majorText}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/TeamSections', module).add(
  'TeamSection8',
  () => {
    const majorText = text('majorText', 'Donec hendrerit');
    const description = text(
      'description',
      ' Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus.'
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'twitter' },
      { id: 2, href: '/', icon: 'linkedin' }
    ]);
    const members = object('stats', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        designation: 'Co-Founder/CEO'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://i.pravatar.cc/300',
        designation: 'Co-Founder/CTO'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://thiscatdoesnotexist.com/',
        designation: 'Manager, Business Relations'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/301',
        designation: 'Front-end Developer'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/302',
        designation: 'Designer'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/303',
        designation: 'Director, Product Development'
      }
    ]);

    return (
      <TeamSection8
        majorText={majorText}
        description={description}
        socialLinks={socialLinks}
        members={members}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
