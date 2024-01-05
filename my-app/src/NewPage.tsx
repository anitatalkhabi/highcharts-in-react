import React from 'react';
import {useEffect, useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Highcharts from 'highcharts';
import {Options} from 'highcharts';
import './NewPage.css' ;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    };


function NewPage() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const chartRef = useRef(null);
    console.log(chartRef)
    //highchart
    const initializeChart = () => {
        
    }
    useEffect(() => {
        if (open && chartRef.current){ 
            Highcharts.chart(chartRef.current, { 
    
                title: {
                    text: 'U.S Solar Employment Growth',
                    align: 'left'
                },
            
                subtitle: {
                    text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
                    align: 'left'
                },
            
                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
            
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2020'
                    }
                },
            
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
            
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
            
                series: [{
                    name: 'Installation & Developers',
                    data: [43934, 48656, 65165, 81827, 112143, 142383,
                        171533, 165174, 155157, 161454, 154610]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 37941, 29742, 29851, 32490, 30282,
                        38121, 36885, 33726, 34243, 31050]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 30000, 16005, 19771, 20185, 24377,
                        32147, 30912, 29243, 29213, 25663]
                }, {
                    name: 'Operations & Maintenance',
                    data: [null, null, null, null, null, null, null,
                        null, 11164, 11218, 10077]
                }, {
                    name: 'Other',
                    data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                        17300, 13053, 11906, 10073]
                }],
            
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            
            } as Options);
        }
    
    },[open]) ;  

    
    return (
        <div className='divcss'>
        <Button onClick={handleOpen}>Open modal</Button> 
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}> 
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div ref={chartRef} id="container" className='chart-container'></div>
            <script src="https://code.highcharts.com/highcharts.js"></script>
            <script src="https://code.highcharts.com/modules/series-label.js"></script>
            <script src="https://code.highcharts.com/modules/exporting.js"></script>
            <script src="https://code.highcharts.com/modules/export-data.js"></script>
            <script src="https://code.highcharts.com/modules/accessibility.js"></script>
            <figure className="highcharts-figure">
            <div id="container"></div>
            <p className="highcharts-description">
            Basic line chart showing trends in a dataset. This chart includes the
            <code>series-label</code> module, which adds a label to each line for
            enhanced readability.
            </p>
            </figure>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
    }

export default NewPage;