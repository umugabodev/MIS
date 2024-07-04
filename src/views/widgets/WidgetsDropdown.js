import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import customColors from '/src/assets/js/customColors';
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react';
import { getStyle } from '@coreui/utils';
import { CChartBar, CChartLine } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons';

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);
  const [countPersonnel, setCountPersonnel] = useState(0);
  const [countOnMission, setCountOnMission] = useState(0);
  const [countOnCourse, setCountOnCourse] = useState(0);
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [personnelResponse, missionResponse, courseResponse] = await Promise.all([
          fetch('http://localhost:3007/api/v1/personnel/count-personnel', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/text'
            }
          }),
          fetch('http://localhost:3007/api/v1/missions/count-on-mission', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }),
          fetch('http://localhost:3007/api/v1/courses/count-on-course', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })
        ]);

        if (personnelResponse.ok) {
          const result = await personnelResponse.json();
          setCountPersonnel(result);
        } else {
          const result = await personnelResponse.json();
          setError(result.message || 'Failed to count Personnel');
        }

        if (missionResponse.ok) {
          const result = await missionResponse.json();
          setCountOnMission(result);
        } else {
          const result = await missionResponse.json();
          setError(result.message || 'Failed to count Personnel on Mission');
        }

        if (courseResponse.ok) {
          const result = await courseResponse.json();
          setCountOnCourse(result);
        } else {
          const result = await courseResponse.json();
          setError(result.message || 'Failed to count Personnel on Course');
        }
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    const handleColorSchemeChange = () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary');
          widgetChartRef1.current.update();
        });
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info');
          widgetChartRef2.current.update();
        });
      }
    };

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange);
    fetchData();

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange);
    };
  }, [token]);

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          style={{ backgroundColor: customColors.primary, color: customColors.secondary }}
          value={
            <>
              {countPersonnel}{' '}
              <span className="fs-6 fw-normal">
                {/* (+12.4% <CIcon icon={cilArrowTop} />) */}
              </span>
            </>
          }
          title="Total Personnel"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              ref={widgetChartRef1}
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { display: false },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    border: { display: false },
                    grid: { display: false, drawBorder: false },
                    ticks: { display: false },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: { display: false },
                    ticks: { display: false },
                  },
                },
                elements: {
                  line: { borderWidth: 1, tension: 0.4 },
                  point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                },
              }}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          value={
            <>
              {countOnMission}{' '}
              <span className="fs-6 fw-normal">
                {/* (40.9% <CIcon icon={cilArrowTop} />) */}
              </span>
            </>
          }
          title="On Mission"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              ref={widgetChartRef2}
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { display: false },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    border: { display: false },
                    grid: { display: false, drawBorder: false },
                    ticks: { display: false },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: { display: false },
                    ticks: { display: false },
                  },
                },
                elements: {
                  line: { borderWidth: 1 },
                  point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                },
              }}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="primary"
          value={
            <>
              {countOnCourse}{' '}
              <span className="fs-6 fw-normal">
                {/* (84.7% <CIcon icon={cilArrowTop} />) */}
              </span>
            </>
          }
          title="On Course"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { display: false },
                },
                maintainAspectRatio: false,
                scales: {
                  x: { display: false },
                  y: { display: false },
                },
                elements: {
                  line: { borderWidth: 2, tension: 0.4 },
                  point: { radius: 0, hitRadius: 10, hoverRadius: 4 },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="secondary"
          value={
            <>
              706{' '}
              <span className="fs-6 fw-normal">
                {/* (-23.6% <CIcon icon={cilArrowBottom} />) */}
              </span>
            </>
          }
          title="Attached"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                  'January',
                  'February',
                  'March',
                  'April',
                ],
                datasets: [
                  {
                    label: 'dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  );
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown;