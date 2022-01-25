import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, array, boolean } from '@storybook/addon-knobs';
import { ContentSection1 } from './ContentSection1';
import { ContentSection2 } from './ContentSection2';
import { ContentSection3 } from './ContentSection3';
import { ContentSection4 } from './ContentSection4';
import { ContentSection5 } from './ContentSection5';
import { ContentSection6 } from './ContentSection6';

storiesOf('Examples/Marketing/ContentSections', module).add(
  'ContentSection1',
  () => {
    const majorText = text(
      'majorText',
      'Curabitur in lorem vel purus feugiat dictum'
    );
    const minorText = text('minorText', 'AVERY LARSEN');
    const content1 = text(
      'content1',
      'Vivamus scelerisque ornare justo a dapibus. Sed ac finibus sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse quis leo condimentum, fermentum lacus sit amet, ultricies libero. Praesent ut est facilisis, gravida mauris et, ultrices elit. Cras diam nisl, scelerisque at eros a, egestas tempus dolor.'
    );
    const content2 = object('content2', {
      text1: 'In blandit nisl ac orci ullamcorper, et ornare est laoreet.',
      text2:
        'Pellentesque pretium tortor sed suscipit aliquet. Mauris venenatis vel sem molestie cursus. Vivamus a blandit lacus, in commodo lorem. Morbi id metus a nulla viverra euismod at eleifend velit. Quisque congue erat non dignissim hendrerit. Etiam sed volutpat arcu. Integer eu risus a nisi efficitur sodales. Aliquam vel egestas tortor. Nulla facilisi.',
      bold: { boldWord1: 'Vivamus', boldWord2: 'malesuada', text: 'and' },
      link: {
        href: '/',
        linkText: 'Maecenas egestas arcu',
        text: 'fermentum nisl et nisl venenatis ornare.'
      }
    });
    const unorderedLists = array('unordered lists', [
      'Sed elementum lorem ut turpis eleifend, id finibus eros commodo.',
      'Curabitur in lorem vel purus feugiat dictum.',
      'Maecenas ut leo ac sem varius venenatis nec at ipsum.'
    ]);
    const content3 = text(
      'content3',
      'Integer tempor neque eget tempus laoreet. Phasellus accumsan viverra ante, eget vehicula leo vehicula ut. Maecenas purus mi, consequat nec ultricies eu, malesuada a lectus. Suspendisse potenti. Phasellus porta lectus non molestie eleifend. Integer efficitur erat a maximus accumsan. Etiam sagittis libero vel erat consequat, eget faucibus ipsum pretium. Mauris pulvinar tempus lectus vitae ullamcorper.'
    );

    const header1 = text(
      'header1',
      'Proin et enim id elit lobortis consectetur a aest'
    );
    const content4 = text(
      'content4',
      'Ut a nunc magna. Quisque posuere consequat lorem quis egestas. Nulla cursus risus porttitor, interdum mi at, dapibus lorem. Quisque ac diam ac quam interdum semper at et dolor. Sed massa urna, tristique vitae pulvinar sit amet, sodales eu neque. Nullam hendrerit rutrum nisi at mollis. In vestibulum ultricies urna, ut maximus lorem. Nulla eu mollis nisl. Duis facilisis dui dui. Nullam nunc mi, convallis in lorem et, elementum sollicitudin mi. Quisque pellentesque diam quam, non vulputate nisl blandit ac. Nullam a lobortis sem. In tempor sollicitudin lectus ut pharetra. Donec eget purus aliquam, ultricies libero ut, volutpat nunc.'
    );
    const quote = object(
      'quote',
      '”Morbi quis sem venenatis, sodales justo ac, venenatis dolor. Cras aliquet est non tincidunt pulvinar. Donec tristique nibh id mauris viverra, quis tincidunt turpis fringilla. Fusce condimentum nisi risus, at tempus lacus feugiat ut. Pellentesque lobortis felis ut urna accumsan, non viverra orci rhoncus.“'
    );
    const content5 = text(
      'content5',
      'Praesent sollicitudin lobortis commodo. Morbi porta a velit et consectetur. Donec cursus mauris id libero fermentum, vitae pulvinar eros efficitur. Mauris et felis laoreet, bibendum justo vel, condimentum lectus. Duis bibendum turpis ut vulputate interdum. Sed lacinia interdum mauris, in tincidunt ante. Nulla facilisi. Sed vel consectetur quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ex velit, vehicula at tempus iaculis, commodo id velit.'
    );
    const image = object('image', {
      imageUrl: 'https://picsum.photos/2000/',
      text: 'Etiam quis magna in mi placerat malesuada quis nec nisl.'
    });

    const header2 = text(
      'header2',
      'Sed elementum lorem ut turpis eleifend, id finibus eros commodo'
    );
    const content6 = object('content6', {
      text1: 'Etiam aliquam enim ac enim elementum interdum',
      text2:
        'Sed sapien enim, suscipit vel mi non, luctus fringilla quam. Donec non fringilla est, eu vehicula sem. Morbi varius in nulla a pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla viverra ultricies odio, sit amet pharetra nisi posuere id eros purus, pellentesque non auctor at, lacinia quis est sed id ornare tellus, eget sagittis felis. In sit amet nunc lacus. Nulla facilisi. Morbi et enim vel diam ornare commodo.',
      text3:
        'Morbi accumsan posuere diam et mollis. Morbi quis sem venenatis, sodales justo ac, venenatis dolor. Cras aliquet est non tincidunt pulvinar. Donec tristique nibh id mauris viverra, quis tincidunt turpis fringilla. Fusce condimentum nisi risus, at tempus lacus feugiat ut. Pellentesque lobortis felis ut urna accumsan, non viverra orci rhoncus. Integer porttitor sodales commodo. Ut ullamcorper commodo eros. Phasellus sed sagittis turpis, non sagittis libero.',
      link: { href: '/', text: 'venenatis' }
    });

    return (
      <ContentSection1
        majorText={majorText}
        minorText={minorText}
        content1={content1}
        content2={content2}
        unorderedLists={unorderedLists}
        content3={content3}
        header1={header1}
        content4={content4}
        quote={quote}
        content5={content5}
        image={image}
        header2={header2}
        content6={content6}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContentSections', module).add(
  'ContentSection2',
  () => {
    const majorText = text('majorText', 'Mauris nec accumsan metus');
    const minorText = text('minorText', 'PROIN TRISTIQUE CONVALLIS');
    const content1 = text(
      'content1',
      'Curabitur quis tortor aliquam, pulvinar nunc a, consectetur quam. Cras gravida erat metus, ut aliquam ex ornare et. Nam placerat metus sit amet blandit aliquam. Donec dapibus lacinia purus id porta. Mauris auctor mauris vitae venenatis venenatis. Ut ac hendrerit ante. Pellentesque auctor sed nibh eu tempor.'
    );
    const content2 = text(
      'content2',
      'Donec consequat imperdiet lorem, sed vestibulum tellus pellentesque vitae. Curabitur at urna orci. Praesent sollicitudin dignissim nisl, at porttitor neque dignissim at. Vivamus auctor, tellus vitae finibus cursus, massa arcu sagittis eros, et blandit lacus tortor ut enim. Donec eget ante quis est pulvinar semper.'
    );
    const content3 = text(
      'content3',
      'Phasellus aliquet auctor arcu, sit amet porttitor mi aliquam quis. Proin mollis porta dolor, vel imperdiet mauris euismod et. Praesent tristique massa ac libero condimentum, vitae molestie erat lacinia. Morbi a urna pellentesque, pharetra orci ut, lacinia tellus. Ut id ornare odio. Integer eu massa quis ex imperdiet aliquam.'
    );
    const content4 = text(
      'content4',
      'Aliquam eros elit, tincidunt at nisl vehicula, cursus mattis ex. Nulla cursus, leo sit amet laoreet consequat, ligula sapien lobortis lectus, sed elementum lorem mauris non dui. Vivamus eu sapien pretium augue tincidunt feugiat nec ac orci. Integer facilisis sapien quis volutpat imperdiet.'
    );
    const unorderedLists = array('unordered lists', [
      'Quisque bibendum enim a nisl sollicitudin pulvinar.',
      'Aenean bibendum elit et sapien efficitur, eget congue odio pretium.',
      'In egestas orci egestas, posuere ipsum vitae, elementum diam.'
    ]);
    const content5 = text(
      'content5',
      'Vestibulum consequat nisi et sapien pulvinar, vel hendrerit ipsum venenatis. Cras urna dolor, venenatis sit amet diam ac, pellentesque gravida nulla. Nam sapien libero, euismod non vestibulum eu, ullamcorper sit amet leo. Quisque non tortor porttitor, tempus sem in, lacinia arcu. Donec quis erat in mauris sagittis molestie eget sed purus. Suspendisse vitae mattis nisi, sit amet dapibus nibh.'
    );

    const header1 = text(
      'header1',
      'Sed elementum lorem ut turpis eleifend, id finibus eros commodo'
    );
    const content6 = text(
      'content6',
      'Maecenas vitae arcu massa. Quisque semper felis nisi, at elementum libero tincidunt auctor. Nulla fermentum ipsum id nisi laoreet, nec aliquam nibh condimentum. Proin feugiat eros nisl, vel dignissim tortor consequat vel. Aliquam erat volutpat. Sed eget turpis sed orci porta semper ut sit amet diam. Phasellus vitae tristique libero, sit amet venenatis purus. Nunc vel nunc ultricies, elementum arcu a, dictum magna. In nec facilisis orci.'
    );
    const content7 = text(
      'content7',
      'Mauris nec accumsan metus. Donec nec varius tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam odio. Cras urna mi, condimentum ac laoreet non, accumsan ut massa. Vestibulum sed purus a metus facilisis luctus. Vivamus a diam lacus. Sed venenatis, dui ut fermentum pretium, diam est elementum enim, eget consequat nisl leo feugiat tellus. Cras felis neque, convallis eget congue eu, malesuada eu lorem.'
    );

    const image = text('image', 'https://picsum.photos/2000/');
    const contentReverse = boolean('reverse', false);

    return (
      <ContentSection2
        majorText={majorText}
        minorText={minorText}
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        unorderedLists={unorderedLists}
        content5={content5}
        header1={header1}
        content6={content6}
        content7={content7}
        image={image}
        contentReverse={contentReverse}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContentSections', module).add(
  'ContentSection3',
  () => {
    const majorText = text('majorText', 'Mauris nec accumsan metus');
    const minorText = text('minorText', 'PROIN TRISTIQUE CONVALLIS');
    const content1 = text(
      'content1',
      'Curabitur quis tortor aliquam, pulvinar nunc a, consectetur quam. Cras gravida erat metus, ut aliquam ex ornare et. Nam placerat metus sit amet blandit aliquam. Donec dapibus lacinia purus id porta. Mauris auctor mauris vitae venenatis venenatis. Ut ac hendrerit ante. Pellentesque auctor sed nibh eu tempor.'
    );
    const content2 = text(
      'content2',
      'Donec consequat imperdiet lorem, sed vestibulum tellus pellentesque vitae. Curabitur at urna orci. Praesent sollicitudin dignissim nisl, at porttitor neque dignissim at. Vivamus auctor, tellus vitae finibus cursus, massa arcu sagittis eros, et blandit lacus tortor ut enim. Donec eget ante quis est pulvinar semper.'
    );
    const content3 = text(
      'content3',
      'Phasellus aliquet auctor arcu, sit amet porttitor mi aliquam quis. Proin mollis porta dolor, vel imperdiet mauris euismod et. Praesent tristique massa ac libero condimentum, vitae molestie erat lacinia. Morbi a urna pellentesque, pharetra orci ut, lacinia tellus. Ut id ornare odio. Integer eu massa quis ex imperdiet aliquam.'
    );
    const content4 = text(
      'content4',
      'Aliquam eros elit, tincidunt at nisl vehicula, cursus mattis ex. Nulla cursus, leo sit amet laoreet consequat, ligula sapien lobortis lectus, sed elementum lorem mauris non dui. Vivamus eu sapien pretium augue tincidunt feugiat nec ac orci. Integer facilisis sapien quis volutpat imperdiet.'
    );
    const unorderedLists = array('unordered lists', [
      'Quisque bibendum enim a nisl sollicitudin pulvinar.',
      'Aenean bibendum elit et sapien efficitur, eget congue odio pretium.',
      'In egestas orci egestas, posuere ipsum vitae, elementum diam.'
    ]);
    const content5 = text(
      'content5',
      'Vestibulum consequat nisi et sapien pulvinar, vel hendrerit ipsum venenatis. Cras urna dolor, venenatis sit amet diam ac, pellentesque gravida nulla. Nam sapien libero, euismod non vestibulum eu, ullamcorper sit amet leo. Quisque non tortor porttitor, tempus sem in, lacinia arcu. Donec quis erat in mauris sagittis molestie eget sed purus. Suspendisse vitae mattis nisi, sit amet dapibus nibh.'
    );

    const header1 = text(
      'header1',
      'Sed elementum lorem ut turpis eleifend, id finibus eros commodo'
    );
    const content6 = text(
      'content6',
      'Maecenas vitae arcu massa. Quisque semper felis nisi, at elementum libero tincidunt auctor. Nulla fermentum ipsum id nisi laoreet, nec aliquam nibh condimentum. Proin feugiat eros nisl, vel dignissim tortor consequat vel. Aliquam erat volutpat. Sed eget turpis sed orci porta semper ut sit amet diam. Phasellus vitae tristique libero, sit amet venenatis purus. Nunc vel nunc ultricies, elementum arcu a, dictum magna. In nec facilisis orci.'
    );
    const content7 = text(
      'content7',
      'Mauris nec accumsan metus. Donec nec varius tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam odio. Cras urna mi, condimentum ac laoreet non, accumsan ut massa. Vestibulum sed purus a metus facilisis luctus. Vivamus a diam lacus. Sed venenatis, dui ut fermentum pretium, diam est elementum enim, eget consequat nisl leo feugiat tellus. Cras felis neque, convallis eget congue eu, malesuada eu lorem.'
    );

    const image = object('image', {
      url: 'https://picsum.photos/2000/',
      icon: 'image',
      text: 'Nulla gravida metus at accumsan tincidunt.'
    });

    return (
      <ContentSection3
        majorText={majorText}
        minorText={minorText}
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        unorderedLists={unorderedLists}
        content5={content5}
        header1={header1}
        content6={content6}
        content7={content7}
        image={image}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContentSections', module).add(
  'ContentSection4',
  () => {
    const majorText = text('majorText', 'Mauris nec accumsan metus');
    const minorText = text('minorText', 'PROIN TRISTIQUE CONVALLIS');
    const content1 = text(
      'content1',
      'Curabitur quis tortor aliquam, pulvinar nunc a, consectetur quam. Cras gravida erat metus, ut aliquam ex ornare et. Nam placerat metus sit amet blandit aliquam. Donec dapibus lacinia purus id porta. Mauris auctor mauris vitae venenatis venenatis. Ut ac hendrerit ante. Pellentesque auctor sed nibh eu tempor.'
    );
    const content2 = text(
      'content2',
      'Donec consequat imperdiet lorem, sed vestibulum tellus pellentesque vitae. Curabitur at urna orci. Praesent sollicitudin dignissim nisl, at porttitor neque dignissim at. Vivamus auctor, tellus vitae finibus cursus, massa arcu sagittis eros, et blandit lacus tortor ut enim. Donec eget ante quis est pulvinar semper.'
    );
    const unorderedLists = array('unordered lists', [
      'Quisque bibendum enim a nisl sollicitudin pulvinar.',
      'Aenean bibendum elit et sapien efficitur, eget congue odio pretium.',
      'In egestas orci egestas, posuere ipsum vitae, elementum diam.'
    ]);
    const content3 = text(
      'content3',
      'Phasellus aliquet auctor arcu, sit amet porttitor mi aliquam quis. Proin mollis porta dolor, vel imperdiet mauris euismod et. Praesent tristique massa ac libero condimentum, vitae molestie erat lacinia. Morbi a urna pellentesque, pharetra orci ut, lacinia tellus. Ut id ornare odio. Integer eu massa quis ex imperdiet aliquam.'
    );
    const header1 = text(
      'header1',
      'Sed elementum lorem ut turpis eleifend, id finibus eros commodo'
    );
    const content4 = text(
      'content4',
      'Aliquam eros elit, tincidunt at nisl vehicula, cursus mattis ex. Nulla cursus, leo sit amet laoreet consequat, ligula sapien lobortis lectus, sed elementum lorem mauris non dui. Vivamus eu sapien pretium augue tincidunt feugiat nec ac orci. Integer facilisis sapien quis volutpat imperdiet.'
    );
    const buttons = object('buttons', [
      { text: 'Praesent ut', variant: 'primary' },
      {
        text: 'Curabitur eget',
        bg: 'whiteAlpha.900',
        color: 'palette.primary.base'
      }
    ]);
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const card = object('card', {
      brand: 'Lanchql',
      content:
        'Cras maximus arcu vel mauris fringilla viverra. Cras eros nibh, vestibulum nec mauris id, pellentesque laoreet nisi. Mauris euismod malesuada velit, ac pharetra neque feugiat vitae. Morbi nec placerat justo. Morbi ut ligula lacus. Fusce ullamcorper lobortis condimentum.',
      author: {
        avatar: 'https://i.pravatar.cc/500',
        name: 'CHANNING LEWIS	',
        designation: 'CEO',
        text: 'at Lanchql'
      },
      backgroundTop: 'white',
      backgroundBottom: 'palette.primary.base'
    });

    return (
      <ContentSection4
        majorText={majorText}
        minorText={minorText}
        content1={content1}
        content2={content2}
        unorderedLists={unorderedLists}
        content3={content3}
        header1={header1}
        content4={content4}
        buttons={buttons}
        logoAttr={logoAttr}
        card={card}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContentSections', module).add(
  'ContentSection5',
  () => {
    const majorText = text('majorText', 'Mauris nec accumsan metus');
    const minorText = text('minorText', 'PROIN TRISTIQUE CONVALLIS');
    const content1 = text(
      'content1',
      'Curabitur quis tortor aliquam, pulvinar nunc a, consectetur quam. Cras gravida erat metus, ut aliquam ex ornare et. Nam placerat metus sit amet blandit aliquam. Donec dapibus lacinia purus id porta. Mauris auctor mauris vitae venenatis venenatis. Ut ac hendrerit ante. Pellentesque auctor sed nibh eu tempor.'
    );
    const content2 = object('content2', {
      text1:
        'Donec consequat imperdiet lorem, sed vestibulum tellus pellentesque vitae. Curabitur at urna orci. Donec eget ante quis est pulvinar semper. Praesent sollicitudin dignissim nisl, at',
      text2:
        'neque dignissim at. Vivamus auctor, tellus vitae finibus cursus, massa arcu sagittis eros, et blandit lacus tortor ut enim.',
      link: {
        href: '/',
        text: 'porttitor'
      }
    });
    const unorderedLists = array('unordered lists', [
      'Aenean bibendum elit et sapien efficitur, eget congue odio pretium.',
      'In egestas orci egestas, posuere ipsum vitae, elementum diam.'
    ]);
    const content3 = text(
      'content3',
      'Phasellus aliquet auctor arcu, sit amet porttitor mi aliquam quis. Proin mollis porta dolor, vel imperdiet mauris euismod et. Praesent tristique massa ac libero condimentum, vitae molestie erat lacinia. Morbi a urna pellentesque, pharetra orci ut, lacinia tellus. Ut id ornare odio. Integer eu massa quis ex imperdiet aliquam.'
    );
    const content4 = text(
      'content4',
      'Aliquam eros elit, tincidunt at nisl vehicula, cursus mattis ex. Nulla cursus, leo sit amet laoreet consequat, ligula sapien lobortis lectus, sed elementum lorem mauris non dui. Vivamus eu sapien pretium augue tincidunt feugiat nec ac orci. Integer facilisis sapien quis volutpat imperdiet.'
    );
    const content5 = text(
      'content5',
      'Ut ultricies sollicitudin metus luctus convallis. Nulla facilisi. Donec rutrum iaculis enim at finibus. Maecenas elementum aliquet mi eu pulvinar. Praesent commodo, risus vel semper dictum, ex urna faucibus mi, ac pretium lectus tellus at urna. Ut nec iaculis metus. Pellentesque maximus viverra ipsum, sit amet maximus urna. In sed efficitur tellus, nec luctus tellus. Aliquam finibus tincidunt eros vitae ultricies.'
    );
    const content6 = text(
      'content6',
      'Nunc nec leo ligula. Sed ultrices porttitor lorem, quis imperdiet erat pretium nec. Nam nec libero neque. Sed odio neque, fringilla vitae quam ut, egestas euismod est. Sed a nunc non libero maximus pharetra. Integer molestie turpis at ex lobortis pellentesque. Nunc mattis pharetra ligula id condimentum. Nunc imperdiet posuere lectus, ullamcorper varius urna ornare malesuada. Nunc pellentesque elementum ex eget rutrum. Nunc malesuada risus sit amet ullamcorper porttitor. Sed ornare nibh ut leo vehicula, non dictum elit tincidunt. Nam ultricies nulla quis fringilla sagittis.'
    );
    const button = text('buttons', 'Praesent ut');

    return (
      <ContentSection5
        majorText={majorText}
        minorText={minorText}
        content1={content1}
        content2={content2}
        unorderedLists={unorderedLists}
        content3={content3}
        content4={content4}
        content5={content5}
        content6={content6}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContentSections', module).add(
  'ContentSection6',
  () => {
    const majorText = text('majorText', 'Mauris nec accumsan metus');
    const content1 = text(
      'content1',
      'Curabitur quis tortor aliquam, pulvinar nunc a, consectetur quam. Cras gravida erat metus, ut aliquam ex ornare et. Nam placerat metus sit amet blandit aliquam. Donec dapibus lacinia purus id porta. Mauris auctor mauris vitae venenatis venenatis. Ut ac hendrerit ante. Pellentesque auctor sed nibh eu tempor.'
    );
    const content2 = text(
      'content2',
      'Donec consequat imperdiet lorem, sed vestibulum tellus pellentesque vitae. Curabitur at urna orci. Praesent sollicitudin dignissim nisl, at porttitor neque dignissim at. Vivamus auctor, tellus vitae finibus cursus, massa arcu sagittis eros, et blandit lacus tortor ut enim. Donec eget ante quis est pulvinar semper.'
    );
    const content3 = text(
      'content3',
      'Phasellus aliquet auctor arcu, sit amet porttitor mi aliquam quis. Proin mollis porta dolor, vel imperdiet mauris euismod et. Praesent tristique massa ac libero condimentum, vitae molestie erat lacinia. Morbi a urna pellentesque, pharetra orci ut, lacinia tellus. Ut id ornare odio. Integer eu massa quis ex imperdiet aliquam.'
    );
    const statistics = object('statistics', [
      { header: 'Maecenas', text: '2022' },
      { header: 'Fusce', text: '20' },
      { header: 'Praesent', text: '920' },
      { header: 'Vestibulum', text: '$100M' }
    ]);
    const link = object('link', {
      href: '/',
      icon: 'arrow-right',
      text: 'Sed scelerisque enim vitae nibh tincidunt'
    });
    const logo = text('logo', '');
    const logoAttr =
      typeof logo === 'string' && logo.length > 0 ? { logo } : null;
    const card = object('card', {
      brand: 'Lanchql',
      content:
        'Cras maximus arcu vel mauris fringilla viverra. Cras eros nibh, vestibulum nec mauris id, pellentesque laoreet nisi. Mauris euismod malesuada velit, ac pharetra neque feugiat vitae. Morbi nec placerat justo. Morbi ut ligula lacus. Fusce ullamcorper lobortis condimentum.',
      author: {
        name: 'CHANNING LEWIS',
        designation: 'CEO',
        text: 'at Lanchql'
      },
      backgroundImage: 'https://picsum.photos/2000'
    });

    return (
      <ContentSection6
        majorText={majorText}
        content1={content1}
        content2={content2}
        content3={content3}
        statistics={statistics}
        link={link}
        logoAttr={logoAttr}
        card={card}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
