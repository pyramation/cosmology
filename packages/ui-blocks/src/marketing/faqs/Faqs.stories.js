import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, color } from '@storybook/addon-knobs';
import { Faq1 } from './Faq1';
import { Faq2 } from './Faq2';
import { Faq3 } from './Faq3';
import { Faq4 } from './Faq4';
import { Faq5 } from './Faq5';
import { Faq6 } from './Faq6';
import { Faq7 } from './Faq7';
import { Faq8 } from './Faq8';
import { Faq9 } from './Faq9';

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq1',
  () => {
    const majorText = text('faqText', 'Frequently Asked Questions');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return <Faq1 majorText={majorText} questions={questions} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq2',
  () => {
    const majorText = text('majorText', 'Frequently Asked Questions');
    const desc1 = text(
      'desc1',
      'Proin vel sem scelerisque mi feugiat vulputate?'
    );
    const desc2 = text('desc2', 'nunc ac arcu ornare aliquet.');
    const link = object('link', { text: 'Curabitur amet', href: '/' });
    const icon = text('icon', 'help-circle');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      }
    ]);

    return (
      <Faq2
        majorText={majorText}
        desc1={desc1}
        desc2={desc2}
        link={link}
        icon={icon}
        questions={questions}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq3',
  () => {
    const majorText = text('faqText', 'Frequently Asked Questions');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return <Faq3 majorText={majorText} questions={questions} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq4',
  () => {
    const majorText = text('faqText', 'Frequently Asked Questions');
    const icon = text('icon', 'help-circle');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return <Faq4 majorText={majorText} icon={icon} questions={questions} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq5',
  () => {
    const majorText = text('faqText', 'Frequently Asked Questions');
    const brandColor = color('brandColor', '#01A1FF');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return (
      <Faq5
        majorText={majorText}
        questions={questions}
        brandColor={brandColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq6',
  () => {
    const majorText = text('faqText', 'Frequently Asked Questions');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return <Faq6 majorText={majorText} questions={questions} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq7',
  () => {
    const majorText = text('majorText', 'Frequently Asked Questions');
    const minorText = text(
      'minorText',
      'Donec ipsum lorem, interdum id pellentesque ut, blandit nec est. Praesent faucibus dolor in est pellentesque pharetra. Nam sit amet mauris eleifend neque tincidunt pretium. Nullam tristique interdum augue. Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus.'
    );

    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return (
      <Faq7 majorText={majorText} minorText={minorText} questions={questions} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq8',
  () => {
    const majorText = text('majorText', 'Frequently Asked Questions');
    const minorText = text(
      'minorText',
      'Donec ipsum lorem, interdum id pellentesque ut, blandit nec est. Praesent faucibus dolor in est pellentesque pharetra. Nam sit amet mauris eleifend neque tincidunt pretium. Nullam tristique interdum augue. Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus.'
    );
    const brandColor = color('brandColor', '#01A1FF');
    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return (
      <Faq8
        majorText={majorText}
        minorText={minorText}
        brandColor={brandColor}
        questions={questions}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Faqs', module).add(
  'Faq9',
  () => {
    const majorText = text('majorText', 'Frequently Asked Questions');
    const desc1 = text(
      'minorText',
      'Donec ipsum lorem, interdum id pellentesque ut, blandit nec est. Praesent faucibus dolor in est pellentesque pharetra. Nam sit amet mauris eleifend neque tincidunt pretium.'
    );
    const desc2 = text(
      'minorText',
      'Etiam eget ipsum tempus, scelerisque odio sed, malesuada magna.'
    );
    const link = object('link', {
      href: '/',
      text: 'Sed finibus enim non convallis feugiat.'
    });

    const questions = object('questions', [
      {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet neque mollis, condimentum dolor id, varius justo.'
      },
      {
        id: 2,
        question:
          'Quisque a libero sed elit tristique interdum non vitae ligula?',
        answer:
          'Sed semper convallis ligula, eget tempus dui volutpat sit amet. Nam commodo vehicula tempor.'
      },
      {
        id: 3,
        question:
          'Vivamus rhoncus urna non purus suscipit, a placerat ex pharetra?',
        answer:
          'Vivamus vitae tincidunt nulla, vitae imperdiet orci. Curabitur quis eros blandit, dapibus lorem nec, elementum enim. Mauris condimentum placerat dignissim. Etiam vitae leo vel turpis aliquet laoreet non quis tortor.'
      },
      {
        id: 4,
        question:
          'Fusce laoreet tellus et turpis dignissim, hendrerit tristique urna pulvinar?',
        answer:
          'Suspendisse scelerisque risus sit amet velit congue ornare a ut est. Maecenas quis lorem a elit tristique luctus non nec erat. Suspendisse potenti.'
      },
      {
        id: 5,
        question:
          'Aenean eu magna ornare, gravida erat condimentum, pretium sapien?',
        answer:
          'Etiam pellentesque id urna feugiat luctus. Nulla felis libero, vestibulum vitae turpis vel, tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 6,
        question: 'Duis porta eros at ornare tincidunt?',
        answer:
          'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu.'
      }
    ]);

    return (
      <Faq9
        majorText={majorText}
        desc1={desc1}
        desc2={desc2}
        questions={questions}
        link={link}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
