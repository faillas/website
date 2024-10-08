fetch('https://faillas.github.io/website/assets/data/curriculum-it.json')
      .then(response => response.json())
      .then(data => {
        const curriculum = data.curriculum;

        // Personal Information
        document.getElementById('birth').textContent = curriculum.informations.birth;
        document.getElementById('address').textContent = curriculum.informations.address;
        document.getElementById('phone').textContent = curriculum.informations.phone;
        document.getElementById('email').textContent = curriculum.informations.email;
        document.getElementById('website').textContent = curriculum.informations.website;
        document.getElementById('website').href = curriculum.informations.website;
        document.getElementById('linkedin').textContent = curriculum.informations.linkedin;
        document.getElementById('linkedin').href = curriculum.informations.linkedin;

        // Work Experience
        const workContainer = document.getElementById('work-experiences');
        curriculum.works.forEach(work => {
          const row = document.createElement('tr');
          const dateTd = document.createElement('td');
          dateTd.textContent = work.date;
          const detailsTd = document.createElement('td');
          detailsTd.innerHTML = `<strong>${work.title}</strong><br>${work.agency}, ${work.location} - ${work.contract}`;
          const descUl = document.createElement('ul');
          work.description.forEach(desc => {
            const li = document.createElement('li');
            li.textContent = desc;
            descUl.appendChild(li);
          });
          detailsTd.appendChild(descUl);
          row.appendChild(dateTd);
          row.appendChild(detailsTd);
          workContainer.appendChild(row);
        });

        // Training
        const trainingContainer = document.getElementById('training');
        curriculum.training.forEach(training => {
          const row = document.createElement('tr');
          const dateTd = document.createElement('td');
          dateTd.textContent = training.dates;
          const detailsTd = document.createElement('td');
          detailsTd.innerHTML = `<strong>${training.title}</strong><br>${training.istitute}`;
          const descUl = document.createElement('ul');
          training.description.forEach(desc => {
            const li = document.createElement('li');
            li.textContent = desc;
            descUl.appendChild(li);
          });
          detailsTd.appendChild(descUl);
          row.appendChild(dateTd);
          row.appendChild(detailsTd);
          trainingContainer.appendChild(row);
        });

        // Skills
        const skillsContainer = document.getElementById('skills');
        Object.keys(curriculum.skills).forEach(skillType => {
          const row = document.createElement('tr');
          const skillTd = document.createElement('td');
          skillTd.style.fontWeight = 'bold';
          skillTd.textContent = skillType.toUpperCase();
          row.appendChild(skillTd);

          const skillsListTd = document.createElement('td');
          const skillsUl = document.createElement('ul');
          curriculum.skills[skillType].forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsUl.appendChild(li);
          });
          skillsListTd.appendChild(skillsUl);
          row.appendChild(skillsListTd);
          skillsContainer.appendChild(row);
        });

         // Other Information Section
            const otherContainer = document.getElementById('other-info');

            // Driving License
            const drivingLicenseRow = document.createElement('tr');
            const drivingLicenseTd = document.createElement('td');
            drivingLicenseTd.style.fontWeight = 'bold';
            drivingLicenseTd.textContent = 'PATENTE';
            const drivingLicenseValue = document.createElement('td');
            drivingLicenseValue.textContent = curriculum.other.driving_license;
            drivingLicenseRow.appendChild(drivingLicenseTd);
            drivingLicenseRow.appendChild(drivingLicenseValue);
            otherContainer.appendChild(drivingLicenseRow);

            // Learning
            const learningRow = document.createElement('tr');
            const learningTd = document.createElement('td');
            learningTd.style.fontWeight = 'bold';
            learningTd.textContent = 'CORSI/CERTIFICAZIONI';
            const learningValue = document.createElement('td');
            const learningUl = document.createElement('ul');
            curriculum.other.learning.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course;
            learningUl.appendChild(li);
            });
            learningValue.appendChild(learningUl);
            learningRow.appendChild(learningTd);
            learningRow.appendChild(learningValue);
            otherContainer.appendChild(learningRow);

            //languages
            const italianValueTd = document.querySelector('.languages td:nth-child(2)'); // Selects the second cell in the first row

            // Populate English Language Proficiency using IDs
            document.getElementById('english-listen').textContent = curriculum.languages.english.comprension.listen; // Ascolto
            document.getElementById('english-read').textContent = curriculum.languages.english.comprension.read; // Lettura
            document.getElementById('english-interaction').textContent = curriculum.languages.english.speaking.interaction; // Interazione
            document.getElementById('english-oral').textContent = curriculum.languages.english.speaking.oral; // Orale
            document.getElementById('english-write').textContent = curriculum.languages.english.write; // Scritto

            // Publications
            const publicationsRow = document.createElement('tr');
            const publicationsTd = document.createElement('td');
            publicationsTd.style.fontWeight = 'bold';
            publicationsTd.textContent = 'PUBBLICAZIONI';
            const publicationsValue = document.createElement('td');
            publicationsValue.textContent = curriculum.other.publications[0];
            publicationsRow.appendChild(publicationsTd);
            publicationsRow.appendChild(publicationsValue);
            otherContainer.appendChild(publicationsRow);

            // Subscriptions
            const subscriptionsRow = document.createElement('tr');
            const subscriptionsTd = document.createElement('td');
            subscriptionsTd.style.fontWeight = 'bold';
            subscriptionsTd.textContent = 'ISCRIZIONI';
            const subscriptionsValue = document.createElement('td');
            subscriptionsValue.textContent = curriculum.other.subscriptions[0];
            subscriptionsRow.appendChild(subscriptionsTd);
            subscriptionsRow.appendChild(subscriptionsValue);
            otherContainer.appendChild(subscriptionsRow);

        // Footer (Authorization and Location Date)
        document.getElementById('authorization').textContent = curriculum.authorization;
        document.getElementById('location-date').textContent = `${curriculum.location}, ${curriculum.date}`;
      })
      .catch(error => console.error('Error loading the curriculum data:', error));